const express = require('express');
const auth = require('../middleware/auth');
const Order = require('../models/Order');

const router = express.Router();

// POST /api/user-orders — create order for logged-in user (Buy Now)
router.post('/', auth, async (req, res) => {
  try {
    const { productId, productName, price, quantity } = req.body;

    if (!productId || !productName || price === undefined || !quantity) {
      return res.status(400).json({ success: false, message: 'Product details are required' });
    }

    if (price <= 0 || quantity < 1) {
      return res.status(400).json({ success: false, message: 'Invalid price or quantity' });
    }

    const totalAmount = price * quantity;
    const orderId = Order.generateOrderId();

    const order = await Order.create({
      orderId,
      userId: req.user._id,
      customer: {
        name: req.user.name,
        phone: 'N/A',
        email: req.user.email,
        address: 'N/A',
        city: 'N/A',
        pincode: '000000'
      },
      items: [{
        productId,
        name: productName,
        price,
        quantity: quantity
      }],
      totalAmount,
      paymentMethod: 'razorpay',
      paymentStatus: 'pending',
      orderStatus: 'placed',
      statusHistory: [{ status: 'placed', note: 'Order placed via Buy Now' }]
    });

    res.status(201).json({
      success: true,
      orderId: order.orderId,
      message: 'Order placed successfully'
    });
  } catch (error) {
    console.error('Create user order error:', error);
    res.status(500).json({ success: false, message: 'Failed to place order' });
  }
});

// GET /api/user-orders — get logged-in user's orders only
router.get('/', auth, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id })
      .sort({ createdAt: -1 })
      .select('orderId items totalAmount paymentStatus orderStatus statusHistory createdAt estimatedDelivery trackingNumber');

    res.json({ success: true, orders });
  } catch (error) {
    console.error('Fetch user orders error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch orders' });
  }
});

// GET /api/user-orders/:orderId — get single order detail (only if belongs to user)
router.get('/:orderId', auth, async (req, res) => {
  try {
    const order = await Order.findOne({
      orderId: req.params.orderId,
      userId: req.user._id
    });

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch order' });
  }
});

module.exports = router;
