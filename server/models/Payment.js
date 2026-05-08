const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  orderId: { type: String, required: true, index: true },
  razorpayOrderId: { type: String, required: true, unique: true },
  razorpayPaymentId: { type: String, default: '' },
  razorpaySignature: { type: String, default: '' },
  amount: { type: Number, required: true },
  currency: { type: String, default: 'INR' },
  status: {
    type: String,
    enum: ['created', 'authorized', 'captured', 'failed', 'refunded'],
    default: 'created'
  },
  method: { type: String, default: '' }, // upi, card, netbanking, wallet
  attempts: { type: Number, default: 0 },
  webhookVerified: { type: Boolean, default: false }
}, {
  timestamps: true
});

module.exports = mongoose.model('Payment', paymentSchema);
