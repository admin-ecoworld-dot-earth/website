const nodemailer = require('nodemailer');

// Zoho Mail SMTP transporter (port 587 + STARTTLS)
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.in',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    minVersion: 'TLSv1.2'
  }
});

/**
 * Send order confirmation email
 */
async function sendOrderConfirmation(order) {
  if (!process.env.EMAIL_USER || !order.customer.email) return;

  const itemRows = order.items.map(item =>
    `<tr>
      <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;">${item.name}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;text-align:center;">${item.quantity}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;text-align:right;">₹${(item.price * item.quantity).toLocaleString('en-IN')}</td>
    </tr>`
  ).join('');

  const html = `
    <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;">
      <div style="background:linear-gradient(135deg,#1b5e20,#2e7d32);padding:24px;text-align:center;border-radius:8px 8px 0 0;">
        <h1 style="color:#fff;margin:0;font-size:22px;">🌿 EcoWorld.earth</h1>
        <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:14px;">Order Confirmation</p>
      </div>
      <div style="padding:24px;">
        <h2 style="color:#1b5e20;font-size:18px;margin:0 0 4px;">Thank you, ${order.customer.name}!</h2>
        <p style="color:#666;font-size:14px;margin:0 0 20px;">Your order has been placed successfully.</p>

        <div style="background:#f9fdf9;border:1px solid #e8f5e9;border-radius:8px;padding:16px;margin-bottom:20px;">
          <table style="width:100%;">
            <tr>
              <td style="color:#888;font-size:12px;">ORDER ID</td>
              <td style="color:#888;font-size:12px;">DATE</td>
              <td style="color:#888;font-size:12px;">STATUS</td>
            </tr>
            <tr>
              <td style="font-weight:700;color:#1b5e20;font-family:monospace;font-size:15px;">${order.orderId}</td>
              <td style="font-weight:600;color:#333;">${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
              <td><span style="background:#e8f5e9;color:#2e7d32;padding:3px 10px;border-radius:12px;font-size:12px;font-weight:600;">CONFIRMED</span></td>
            </tr>
          </table>
        </div>

        <h3 style="font-size:14px;color:#333;margin:0 0 8px;">Items Ordered</h3>
        <table style="width:100%;border-collapse:collapse;margin-bottom:12px;">
          <thead>
            <tr style="background:#f5f5f5;">
              <th style="padding:8px 12px;text-align:left;font-size:12px;color:#888;">ITEM</th>
              <th style="padding:8px 12px;text-align:center;font-size:12px;color:#888;">QTY</th>
              <th style="padding:8px 12px;text-align:right;font-size:12px;color:#888;">PRICE</th>
            </tr>
          </thead>
          <tbody>${itemRows}</tbody>
          <tfoot>
            <tr>
              <td colspan="2" style="padding:10px 12px;font-weight:700;color:#333;border-top:2px solid #e8f5e9;">Total</td>
              <td style="padding:10px 12px;font-weight:700;color:#1b5e20;text-align:right;border-top:2px solid #e8f5e9;font-size:16px;">₹${order.totalAmount.toLocaleString('en-IN')}</td>
            </tr>
          </tfoot>
        </table>

        <h3 style="font-size:14px;color:#333;margin:16px 0 8px;">Delivery Address</h3>
        <p style="color:#555;font-size:14px;line-height:1.5;margin:0;">
          ${order.customer.name}<br>
          ${order.customer.address}<br>
          ${order.customer.city} - ${order.customer.pincode}<br>
          Phone: ${order.customer.phone}
        </p>

        <div style="text-align:center;margin:24px 0 12px;">
          <a href="https://ecoworld.earth/order-tracking.html?id=${order.orderId}" style="display:inline-block;background:#2e7d32;color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px;">Track Your Order</a>
        </div>

        <p style="color:#999;font-size:12px;text-align:center;margin-top:20px;">
          Questions? Contact us on WhatsApp: +91 7204885759<br>
          <a href="https://ecoworld.earth" style="color:#2e7d32;">ecoworld.earth</a>
        </p>
      </div>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"EcoWorld.earth" <sales@ecoworld.earth>`,
      to: order.customer.email,
      subject: `Order Confirmed - ${order.orderId} | EcoWorld.earth`,
      html
    });
    console.log(`Confirmation email sent for order ${order.orderId}`);
  } catch (error) {
    console.error(`Email send failed for ${order.orderId}:`, error.message);
    // Don't throw — email failure shouldn't block order
  }
}

/**
 * Send order failed / payment failed email
 */
async function sendOrderFailed(order, reason) {
  if (!process.env.EMAIL_USER || !order.customer.email) return;

  const html = `
    <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;">
      <div style="background:#e53935;padding:24px;text-align:center;border-radius:8px 8px 0 0;">
        <h1 style="color:#fff;margin:0;font-size:22px;">🌿 EcoWorld.earth</h1>
        <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:14px;">Payment Failed</p>
      </div>
      <div style="padding:24px;text-align:center;">
        <h2 style="color:#e53935;font-size:18px;">Payment could not be processed</h2>
        <p style="color:#666;font-size:14px;">Order <strong>${order.orderId}</strong></p>
        <p style="color:#888;font-size:13px;">${reason || 'Your payment was not completed. No amount has been charged.'}</p>
        <p style="color:#888;font-size:13px;margin-top:16px;">
          Please try again or contact us on WhatsApp: +91 7204885759
        </p>
        <a href="https://ecoworld.earth/cart.html" style="display:inline-block;background:#2e7d32;color:#fff;padding:10px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;margin-top:12px;">Try Again</a>
      </div>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"EcoWorld.earth" <sales@ecoworld.earth>`,
      to: order.customer.email,
      subject: `Payment Failed - ${order.orderId} | EcoWorld.earth`,
      html
    });
  } catch (error) {
    console.error(`Failed email send error for ${order.orderId}:`, error.message);
  }
}

module.exports = { sendOrderConfirmation, sendOrderFailed };
