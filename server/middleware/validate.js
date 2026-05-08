const validateOrder = (req, res, next) => {
  const { customer, items } = req.body;

  if (!customer || !items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ success: false, message: 'Customer details and items are required' });
  }

  // Validate customer
  const { name, phone, address, city, pincode } = customer;
  if (!name || !phone || !address || !city || !pincode) {
    return res.status(400).json({ success: false, message: 'All customer fields are required' });
  }

  // Sanitize phone (basic)
  const phoneClean = phone.replace(/[^0-9+]/g, '');
  if (phoneClean.length < 10) {
    return res.status(400).json({ success: false, message: 'Invalid phone number' });
  }

  // Validate pincode
  if (!/^\d{6}$/.test(pincode)) {
    return res.status(400).json({ success: false, message: 'Invalid pincode' });
  }

  // Validate items
  for (const item of items) {
    if (!item.productId || !item.name || item.price === undefined || !item.quantity) {
      return res.status(400).json({ success: false, message: 'Each item must have productId, name, price, and quantity' });
    }
    if (item.price < 0 || item.quantity < 1) {
      return res.status(400).json({ success: false, message: 'Invalid item price or quantity' });
    }
  }

  // Sanitize customer data
  req.body.customer.name = name.trim().substring(0, 100);
  req.body.customer.phone = phoneClean.substring(0, 15);
  req.body.customer.address = address.trim().substring(0, 500);
  req.body.customer.city = city.trim().substring(0, 50);
  req.body.customer.pincode = pincode.trim();

  next();
};

const validatePaymentVerify = (req, res, next) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ success: false, message: 'Payment verification data incomplete' });
  }

  next();
};

module.exports = { validateOrder, validatePaymentVerify };
