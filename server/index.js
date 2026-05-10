require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');
const paymentRoutes = require('./routes/payment');
const orderRoutes = require('./routes/order');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const userOrderRoutes = require('./routes/userOrders');

const app = express();

// Connect to MongoDB
connectDB();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: [process.env.FRONTEND_URL || 'http://localhost:3000', 'https://ecoworld.earth', 'https://www.ecoworld.earth'],
  methods: ['GET', 'POST', 'PATCH'],
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requests per window
  message: { success: false, message: 'Too many requests, try again later' }
});
app.use('/api/', limiter);

// Stricter rate limit for payment endpoints
const paymentLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 10, // max 10 payment attempts per 5 min
  message: { success: false, message: 'Too many payment attempts, please wait' }
});
app.use('/api/payment/create-order', paymentLimiter);

// Parse JSON (except webhook which needs raw body)
app.use((req, res, next) => {
  if (req.path === '/api/payment/webhook') {
    next();
  } else {
    express.json({ limit: '1mb' })(req, res, next);
  }
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
app.use('/api/user-orders', userOrderRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 404
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`EcoWorld Server running on port ${PORT}`);
});

module.exports = app;
