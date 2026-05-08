const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Optional auth — attaches user if token present, but doesn't block if absent
// Use this for routes that work for both guests and logged-in users
const optionalAuth = async (req, res, next) => {
  req.user = null;
  try {
    const header = req.headers.authorization;
    if (header && header.startsWith('Bearer ')) {
      const token = header.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId);
      if (user) req.user = user;
    }
  } catch (e) {
    // Invalid token — proceed as guest
  }
  next();
};

module.exports = optionalAuth;
