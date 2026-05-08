const express = require('express');
const Order = require('../models/Order');
const auth = require('../middleware/auth');
const router = express.Router();

// GET /api/orders/track/:orderId
// Public — Track order by order ID
router.get('/track/:orderId', async (req, res) => {
  try {
    const { orderId } = req.params;

    // Sanitize input
    const cleanId = orderId.trim().toUpperCase().substring(0, 20);

    const order = await Order.findOne({ orderId: cleanId })
      .select('orderId orderStatus paymentStatus statusHistory items totalAmount customer.name customer.city estimatedDelivery trackingNumber createdAt');

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.json({
      success: true,
      order: {
        orderId: order.orderId,
        orderStatus: order.orderStatus,
        paymentStatus: order.paymentStatus,
        statusHistory: order.statusHistory,
        items: order.items.map(i => ({ name: i.name, quantity: i.quantity, price: i.price })),
        totalAmount: order.totalAmount,
        customerName: order.customer.name,
        city: order.customer.city,
        estimatedDelivery: order.estimatedDelivery,
        trackingNumber: order.trackingNumber,
        placedAt: order.createdAt
      }
    });

  } catch (error) {
    console.error('Track order error:', error);
    res.status(500).json({ success: false, message: 'Error fetching order' });
  }
});

// GET /api/orders/phone/:phone
// Get orders by phone number (simple auth — no login needed for small shop)
router.get('/phone/:phone', async (req, res) => {
  try {
    const phone = req.params.phone.replace(/[^0-9+]/g, '').substring(0, 15);

    if (phone.length < 10) {
      return res.status(400).json({ success: false, message: 'Invalid phone number' });
    }

    const orders = await Order.find({ 'customer.phone': { $regex: phone.slice(-10) } })
      .select('orderId orderStatus paymentStatus totalAmount createdAt')
      .sort({ createdAt: -1 })
      .limit(20);

    res.json({ success: true, orders });

  } catch (error) {
    console.error('Fetch orders error:', error);
    res.status(500).json({ success: false, message: 'Error fetching orders' });
  }
});

// PATCH /api/orders/:orderId/status
// Admin — Update order status (protected with auth + admin check)
router.patch('/:orderId/status', auth, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ success: false, message: 'Admin access required' });
  }
  try {
    const { orderId } = req.params;
    const { status, note, trackingNumber, estimatedDelivery } = req.body;

    const validStatuses = ['placed', 'confirmed', 'processing', 'shipped', 'out_for_delivery', 'delivered', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status' });
    }

    const update = {
      orderStatus: status,
      $push: { statusHistory: { status, note: note || '' } }
    };

    if (trackingNumber) update.trackingNumber = trackingNumber;
    if (estimatedDelivery) update.estimatedDelivery = new Date(estimatedDelivery);

    const order = await Order.findOneAndUpdate(
      { orderId: orderId.toUpperCase() },
      update,
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.json({ success: true, order });

  } catch (error) {
    console.error('Update status error:', error);
    res.status(500).json({ success: false, message: 'Error updating order' });
  }
});

module.exports = router;
