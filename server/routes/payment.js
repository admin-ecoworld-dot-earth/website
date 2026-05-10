const express = require('express');
const crypto = require('crypto');
const Razorpay = require('razorpay');
const Order = require('../models/Order');
const Payment = require('../models/Payment');
const { validateOrder, validatePaymentVerify } = require('../middleware/validate');
const auth = require('../middleware/auth');
const { sendOrderConfirmation, sendOrderFailed, sendOrderNotificationToAdmin } = require('../utils/email');

const router = express.Router();

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// POST /api/payment/create-order
// Creates Razorpay order + stores pending order in DB
router.post('/create-order', auth, validateOrder, async (req, res) => {
  try {
    const { customer, items, paymentMethod, subtotal, gstTotal, transportTotal } = req.body;
    const userId = req.user._id;
    // Calculate total on server (never trust frontend total)
    const itemsTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const serverGst = items.reduce((sum, item) => sum + (item.gstAmount || 0), 0);
    const serverTransport = transportTotal || 0;
    const totalAmount = itemsTotal + serverGst + serverTransport;

    if (totalAmount <= 0) {
      return res.status(400).json({ success: false, message: 'Invalid order total' });
    }

    // Generate order ID
    const orderId = Order.generateOrderId();

    // For COD orders — no Razorpay needed
    if (paymentMethod === 'cod') {
      const order = await Order.create({
        orderId,
        userId,
        customer,
        items,
        subtotal: itemsTotal,
        gstTotal: serverGst,
        transportTotal: serverTransport,
        totalAmount,
        paymentMethod: 'cod',
        paymentStatus: 'pending',
        orderStatus: 'placed',
        statusHistory: [{ status: 'placed', note: 'Order placed with COD' }]
      });

      // Send confirmation email + notify admin
      sendOrderConfirmation(order);
      sendOrderNotificationToAdmin(order);

      return res.status(201).json({
        success: true,
        orderId: order.orderId,
        message: 'Order placed successfully (COD)',
        paymentMethod: 'cod'
      });
    }

    // Create Razorpay order
    const razorpayOrder = await razorpay.orders.create({
      amount: Math.round(totalAmount * 100), // Razorpay uses paise
      currency: 'INR',
      receipt: orderId,
      notes: {
        customerName: customer.name,
        customerPhone: customer.phone
      }
    });

    // Save order (pending payment)
    const order = await Order.create({
      orderId,
      userId,
      customer,
      items,
      subtotal: itemsTotal,
      gstTotal: serverGst,
      transportTotal: serverTransport,
      totalAmount,
      paymentMethod: 'razorpay',
      razorpayOrderId: razorpayOrder.id,
      paymentStatus: 'pending',
      orderStatus: 'placed',
      statusHistory: [{ status: 'placed', note: 'Order created, payment pending' }]
    });

    // Save payment record
    await Payment.create({
      orderId,
      razorpayOrderId: razorpayOrder.id,
      amount: totalAmount,
      status: 'created'
    });

    res.status(201).json({
      success: true,
      orderId: order.orderId,
      razorpayOrderId: razorpayOrder.id,
      amount: totalAmount,
      currency: 'INR',
      keyId: process.env.RAZORPAY_KEY_ID,
      customerName: customer.name,
      customerPhone: customer.phone,
      customerEmail: customer.email || ''
    });

  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ success: false, message: 'Failed to create order' });
  }
});

// POST /api/payment/verify
// Verifies Razorpay payment signature
router.post('/verify', validatePaymentVerify, async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // Verify signature using HMAC SHA256
    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest('hex');

    const isValid = expectedSignature === razorpay_signature;

    if (!isValid) {
      // Update payment as failed
      await Payment.findOneAndUpdate(
        { razorpayOrderId: razorpay_order_id },
        { status: 'failed', razorpayPaymentId: razorpay_payment_id }
      );

      // Update order as failed
      await Order.findOneAndUpdate(
        { razorpayOrderId: razorpay_order_id },
        {
          paymentStatus: 'failed',
          orderStatus: 'cancelled',
          $push: { statusHistory: { status: 'cancelled', note: 'Payment verification failed' } }
        }
      );

      return res.status(400).json({ success: false, message: 'Payment verification failed' });
    }

    // Payment verified — update records
    await Payment.findOneAndUpdate(
      { razorpayOrderId: razorpay_order_id },
      {
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
        status: 'captured'
      }
    );

    const order = await Order.findOneAndUpdate(
      { razorpayOrderId: razorpay_order_id },
      {
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
        paymentStatus: 'paid',
        orderStatus: 'confirmed',
        $push: { statusHistory: { status: 'confirmed', note: 'Payment verified successfully' } }
      },
      { new: true }
    );

    // Send confirmation email + notify admin
    sendOrderConfirmation(order);
    sendOrderNotificationToAdmin(order);

    res.json({
      success: true,
      message: 'Payment verified successfully',
      orderId: order.orderId,
      orderStatus: order.orderStatus
    });

  } catch (error) {
    console.error('Verify payment error:', error);
    res.status(500).json({ success: false, message: 'Payment verification error' });
  }
});

// POST /api/payment/webhook
// Razorpay webhook for real-time payment status
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  try {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    const signature = req.headers['x-razorpay-signature'];

    // Verify webhook signature
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(JSON.stringify(req.body))
      .digest('hex');

    if (signature !== expectedSignature) {
      return res.status(400).json({ success: false });
    }

    const event = req.body.event;
    const payload = req.body.payload;

    if (event === 'payment.captured') {
      const paymentEntity = payload.payment.entity;
      const razorpayOrderId = paymentEntity.order_id;

      await Payment.findOneAndUpdate(
        { razorpayOrderId },
        { status: 'captured', webhookVerified: true, method: paymentEntity.method }
      );

      await Order.findOneAndUpdate(
        { razorpayOrderId },
        {
          paymentStatus: 'paid',
          orderStatus: 'confirmed',
          $push: { statusHistory: { status: 'confirmed', note: 'Payment confirmed via webhook' } }
        }
      );
    }

    if (event === 'payment.failed') {
      const paymentEntity = payload.payment.entity;
      const razorpayOrderId = paymentEntity.order_id;

      await Payment.findOneAndUpdate(
        { razorpayOrderId },
        { status: 'failed', webhookVerified: true }
      );

      await Order.findOneAndUpdate(
        { razorpayOrderId },
        {
          paymentStatus: 'failed',
          $push: { statusHistory: { status: 'cancelled', note: 'Payment failed (webhook)' } }
        }
      );
    }

    res.json({ success: true });

  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ success: false });
  }
});

module.exports = router;
