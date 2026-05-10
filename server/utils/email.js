const nodemailer = require('nodemailer');

// Zoho Mail SMTP transporter (Zoho Workplace Pro)
const transporter = nodemailer.createTransport({
  host: 'smtppro.zoho.com',
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
 * Send order confirmation email with invoice
 */
async function sendOrderConfirmation(order) {
  if (!process.env.EMAIL_USER) {
    console.error('EMAIL NOT SENT: EMAIL_USER env variable is not set');
    return;
  }
  if (!order.customer.email) {
    console.error('EMAIL NOT SENT: Customer email is missing for order', order.orderId);
    return;
  }

  const invoiceNo = order.orderId;
  const orderDate = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const orderTime = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });

  const itemRows = order.items.map((item, i) => {
    const lineTotal = item.price * item.quantity;
    const gstPct = item.gstPercent || 0;
    const gstAmt = item.gstAmount || Math.round(lineTotal * gstPct / 100);
    const variantStr = item.variants ? Object.entries(item.variants).map(([k, v]) => v).join(', ') : '';
    return `<tr>
      <td style="padding:8px;border:1px solid #ddd;text-align:center;">${i + 1}</td>
      <td style="padding:8px;border:1px solid #ddd;">${item.name}${variantStr ? ' - ' + variantStr : ''}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:center;">${item.quantity}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:right;">₹${item.price.toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:right;">₹${lineTotal.toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
    </tr>`;
  }).join('');

  const totalQty = order.items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = order.subtotal || order.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const gstTotal = order.gstTotal || 0;
  const transportTotal = order.transportTotal || 0;

  const html = `
    <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:700px;margin:0 auto;background:#fff;">
      <!-- Order Confirmation Header -->
      <div style="background:linear-gradient(135deg,#1b5e20,#2e7d32);padding:24px;text-align:center;border-radius:8px 8px 0 0;">
        <h1 style="color:#fff;margin:0;font-size:22px;">🌿 EcoWorld.earth</h1>
        <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:14px;">Order Confirmation & Invoice</p>
      </div>

      <div style="padding:24px;">
        <h2 style="color:#1b5e20;font-size:18px;margin:0 0 4px;">Thank you, ${order.customer.name}!</h2>
        <p style="color:#666;font-size:14px;margin:0 0 20px;">Your order has been placed successfully. Here is your invoice:</p>

        <!-- TAX INVOICE -->
        <div style="border:2px solid #333;margin:20px 0;">
          <h2 style="text-align:center;margin:12px 0;font-size:18px;color:#333;">Tax Invoice</h2>
          
          <!-- Business Header -->
          <div style="border:1px solid #ddd;padding:12px;margin:0 8px;">
            <table style="width:100%;">
              <tr>
                <td style="vertical-align:top;width:60%;">
                  <h3 style="margin:0 0 4px;color:#333;">ECOWORLD EARTH PRODUCTS</h3>
                  <p style="margin:0;font-size:12px;color:#555;line-height:1.5;">
                    Near Gunjurpalya government school,<br>
                    Bengaluru, Karnataka, 560087<br>
                    Phone: 7204885759 | Email: sales@ecoworld.earth
                  </p>
                </td>
                <td style="vertical-align:top;text-align:right;">
                  <p style="margin:0;font-size:12px;color:#555;line-height:1.6;">
                    <strong>GSTIN:</strong> 29ACGPO1117J1ZK<br>
                    <strong>State:</strong> 29-Karnataka
                  </p>
                </td>
              </tr>
            </table>
          </div>

          <!-- Bill To + Invoice Details -->
          <div style="display:flex;margin:8px;">
            <table style="width:100%;border-collapse:collapse;margin:0 8px;">
              <tr>
                <td style="border:1px solid #ddd;padding:8px;width:50%;vertical-align:top;">
                  <strong style="font-size:11px;color:#888;">Bill To:</strong><br>
                  <span style="font-size:14px;font-weight:600;">${order.customer.name}</span><br>
                  <span style="font-size:12px;color:#555;">${order.customer.address}<br>${order.customer.city} - ${order.customer.pincode}</span><br>
                  <span style="font-size:12px;color:#555;">Phone: ${order.customer.phone}</span>
                </td>
                <td style="border:1px solid #ddd;padding:8px;width:50%;vertical-align:top;">
                  <strong style="font-size:11px;color:#888;">Invoice Details:</strong><br>
                  <span style="font-size:13px;"><strong>No:</strong> ${invoiceNo}</span><br>
                  <span style="font-size:13px;"><strong>Date:</strong> ${orderDate}</span><br>
                  <span style="font-size:13px;"><strong>Time:</strong> ${orderTime}</span><br>
                  <span style="font-size:13px;"><strong>Payment:</strong> ${order.paymentMethod === 'cod' ? 'COD' : 'Online (Razorpay)'}</span>
                </td>
              </tr>
            </table>
          </div>

          <!-- Items Table -->
          <div style="margin:8px;">
            <table style="width:100%;border-collapse:collapse;">
              <thead>
                <tr style="background:#f0f0f0;">
                  <th style="padding:8px;border:1px solid #ddd;font-size:12px;width:30px;">#</th>
                  <th style="padding:8px;border:1px solid #ddd;font-size:12px;text-align:left;">Item Name</th>
                  <th style="padding:8px;border:1px solid #ddd;font-size:12px;">Qty</th>
                  <th style="padding:8px;border:1px solid #ddd;font-size:12px;">Price/Unit (₹)</th>
                  <th style="padding:8px;border:1px solid #ddd;font-size:12px;">Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                ${itemRows}
                <tr style="background:#f9f9f9;">
                  <td style="padding:8px;border:1px solid #ddd;" colspan="3"></td>
                  <td style="padding:8px;border:1px solid #ddd;text-align:right;font-weight:600;">Subtotal</td>
                  <td style="padding:8px;border:1px solid #ddd;text-align:right;">₹${subtotal.toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
                </tr>
                ${gstTotal > 0 ? `<tr style="background:#f9f9f9;">
                  <td style="padding:8px;border:1px solid #ddd;" colspan="3"></td>
                  <td style="padding:8px;border:1px solid #ddd;text-align:right;font-weight:600;">GST (18%)</td>
                  <td style="padding:8px;border:1px solid #ddd;text-align:right;">₹${gstTotal.toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
                </tr>` : ''}
                ${transportTotal > 0 ? `<tr style="background:#f9f9f9;">
                  <td style="padding:8px;border:1px solid #ddd;" colspan="3"></td>
                  <td style="padding:8px;border:1px solid #ddd;text-align:right;font-weight:600;">Transport / Shipping</td>
                  <td style="padding:8px;border:1px solid #ddd;text-align:right;">₹${transportTotal.toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
                </tr>` : ''}
                <tr style="background:#e8f5e9;font-weight:700;">
                  <td style="padding:8px;border:1px solid #ddd;" colspan="3"></td>
                  <td style="padding:8px;border:1px solid #ddd;text-align:right;font-size:14px;">Grand Total</td>
                  <td style="padding:8px;border:1px solid #ddd;text-align:right;font-size:15px;color:#1b5e20;">₹${order.totalAmount.toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Payment Status -->
          <div style="margin:8px;padding:8px;border:1px solid #ddd;">
            <table style="width:100%;">
              <tr>
                <td style="font-size:13px;"><strong>Payment Status:</strong> ${order.paymentMethod === 'cod' ? 'Pending (COD)' : 'Paid'}</td>
                <td style="text-align:right;font-size:13px;"><strong>Total:</strong> ₹${order.totalAmount.toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
              </tr>
            </table>
          </div>

          <!-- Bank Details -->
          <div style="margin:8px;padding:8px;border:1px solid #ddd;">
            <table style="width:100%;">
              <tr>
                <td style="vertical-align:top;width:60%;">
                  <strong style="font-size:11px;color:#888;">Bank Details:</strong><br>
                  <span style="font-size:12px;line-height:1.6;">
                    Name: HDFC Bank, Meena Plaza<br>
                    Account No: 50200116728012<br>
                    IFSC: HDFC0001472<br>
                    A/c Holder: ECOWORLD EARTH PRODUCTS
                  </span>
                </td>
                <td style="vertical-align:bottom;text-align:center;">
                  <p style="font-size:11px;color:#888;margin:0;">For ECOWORLD EARTH PRODUCTS</p>
                  <p style="font-size:11px;color:#888;margin:4px 0 0;">Authorized Signatory</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <!-- End Invoice -->

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
      subject: `Invoice #${order.orderId} - Order Confirmed | EcoWorld.earth`,
      html
    });
    console.log(`Invoice email sent for order ${order.orderId}`);
  } catch (error) {
    console.error(`Email send failed for ${order.orderId}:`, error.message);
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

module.exports = { sendOrderConfirmation, sendOrderFailed, sendWelcomeEmail, sendNewUserNotification, sendOrderNotificationToAdmin, sendOrderStatusUpdate };

/**
 * Send welcome email to newly registered user
 */
async function sendWelcomeEmail(user) {
  if (!process.env.EMAIL_USER || !user.email) return;

  const html = `
    <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;">
      <div style="background:linear-gradient(135deg,#1b5e20,#2e7d32);padding:28px;text-align:center;border-radius:8px 8px 0 0;">
        <h1 style="color:#fff;margin:0;font-size:22px;">🌿 EcoWorld.earth</h1>
        <p style="color:rgba(255,255,255,0.9);margin:8px 0 0;font-size:15px;">🌍 Welcome to a Smarter, Greener Future</p>
      </div>
      <div style="padding:24px;">
        <h2 style="color:#1b5e20;font-size:20px;margin:0 0 12px;">Hello ${user.name}! 👋</h2>
        <p style="color:#555;font-size:14px;line-height:1.7;">
          Welcome to <strong>EcoWorld Earth Products</strong> — where every choice you make shapes a cleaner tomorrow.
        </p>
        <p style="color:#1b5e20;font-size:15px;font-weight:600;font-style:italic;text-align:center;margin:16px 0;padding:12px;background:#f1f8e9;border-radius:6px;">
          "Carry the future, not the waste."
        </p>
        <p style="color:#555;font-size:14px;line-height:1.7;">
          This isn't just a store — it's a commitment to sustainability, innovation, and responsible living.
        </p>

        <h3 style="color:#1b5e20;font-size:15px;margin:20px 0 12px;">🚀 What You Can Do Right Now:</h3>
        <table style="width:100%;font-size:14px;color:#555;line-height:2;">
          <tr><td>🌱 Explore premium paper bags, biodegradable solutions & eco-friendly essentials</td></tr>
          <tr><td>🔒 Order with confidence using fast & secure Razorpay payments</td></tr>
          <tr><td>📦 Track your orders in real-time</td></tr>
          <tr><td>📩 Get instant invoices delivered to your inbox</td></tr>
        </table>

        <div style="background:#f1f8e9;border-left:4px solid #2e7d32;padding:16px;margin:20px 0;border-radius:0 6px 6px 0;">
          <p style="color:#1b5e20;font-size:15px;font-weight:600;margin:0 0 4px;">💚 Every Choice Counts</p>
          <p style="color:#555;font-size:13px;margin:0;line-height:1.6;">
            When you shop here, you're not just buying a product — you're making a statement for the planet.<br>
            <strong>Start now. Make it matter.</strong>
          </p>
        </div>

        <div style="text-align:center;margin:24px 0;">
          <a href="https://ecoworld.earth/products.html" style="display:inline-block;background:#2e7d32;color:#fff;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:700;font-size:15px;">🌱 Start Shopping</a>
        </div>
        <p style="color:#999;font-size:12px;text-align:center;margin-top:20px;">
          Need help? WhatsApp us: +91 7204885759<br>
          <a href="https://ecoworld.earth" style="color:#2e7d32;">ecoworld.earth</a>
        </p>
      </div>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"EcoWorld.earth" <sales@ecoworld.earth>`,
      to: user.email,
      subject: `Welcome to EcoWorld.earth! 🌿`,
      html
    });
    console.log(`Welcome email sent to ${user.email}`);
  } catch (error) {
    console.error(`Welcome email failed for ${user.email}:`, error.message);
  }
}

/**
 * Notify admin when a new user registers
 */
async function sendNewUserNotification(user) {
  if (!process.env.EMAIL_USER) return;

  const html = `
    <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:500px;margin:0 auto;background:#fff;border:1px solid #e0e0e0;border-radius:8px;">
      <div style="background:#1b5e20;padding:16px;text-align:center;border-radius:8px 8px 0 0;">
        <h2 style="color:#fff;margin:0;font-size:16px;">New User Registration</h2>
      </div>
      <div style="padding:16px;">
        <table style="width:100%;font-size:14px;line-height:2;">
          <tr><td style="color:#888;width:80px;">Name:</td><td style="font-weight:600;">${user.name}</td></tr>
          <tr><td style="color:#888;">Email:</td><td>${user.email}</td></tr>
          <tr><td style="color:#888;">Date:</td><td>${new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</td></tr>
        </table>
      </div>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"EcoWorld System" <sales@ecoworld.earth>`,
      to: 'admin@ecoworld.earth',
      subject: `New User: ${user.name} (${user.email})`,
      html
    });
  } catch (error) {
    console.error(`Admin notification failed:`, error.message);
  }
}

/**
 * Notify admin about new order with full details for dispatch
 */
async function sendOrderNotificationToAdmin(order) {
  if (!process.env.EMAIL_USER) {
    console.error('ADMIN EMAIL NOT SENT: EMAIL_USER env variable is not set');
    return;
  }

  const itemRows = order.items.map((item, i) =>
    `<tr>
      <td style="padding:8px;border:1px solid #ddd;text-align:center;">${i + 1}</td>
      <td style="padding:8px;border:1px solid #ddd;">${item.name}${item.variants ? ' - ' + Object.values(item.variants).join(', ') : ''}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:center;">${item.quantity}</td>
      <td style="padding:8px;border:1px solid #ddd;text-align:right;">₹${(item.price * item.quantity).toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
    </tr>`
  ).join('');

  const html = `
    <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #e0e0e0;border-radius:8px;">
      <div style="background:#1b5e20;padding:16px;text-align:center;border-radius:8px 8px 0 0;">
        <h2 style="color:#fff;margin:0;font-size:18px;">🛒 New Order Received!</h2>
      </div>
      <div style="padding:20px;">

        <div style="background:#f9fdf9;border:1px solid #e8f5e9;border-radius:6px;padding:12px;margin-bottom:16px;">
          <table style="width:100%;font-size:14px;">
            <tr>
              <td style="color:#888;width:120px;">Order ID:</td>
              <td style="font-weight:700;color:#1b5e20;font-family:monospace;font-size:15px;">${order.orderId}</td>
            </tr>
            <tr>
              <td style="color:#888;">Date:</td>
              <td>${new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</td>
            </tr>
            <tr>
              <td style="color:#888;">Payment:</td>
              <td><span style="background:${order.paymentMethod === 'cod' ? '#fff3e0' : '#e8f5e9'};color:${order.paymentMethod === 'cod' ? '#e65100' : '#2e7d32'};padding:2px 8px;border-radius:4px;font-weight:600;font-size:12px;">${order.paymentMethod === 'cod' ? 'COD' : 'PAID (Razorpay)'}</span></td>
            </tr>
            <tr>
              <td style="color:#888;">Total:</td>
              <td style="font-weight:700;font-size:18px;color:#1b5e20;">₹${order.totalAmount.toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
            </tr>
          </table>
        </div>

        <h3 style="font-size:14px;color:#1b5e20;margin:0 0 8px;border-bottom:2px solid #e8f5e9;padding-bottom:4px;">📋 Customer Details</h3>
        <table style="width:100%;font-size:14px;line-height:1.8;margin-bottom:16px;">
          <tr><td style="color:#888;width:100px;">Name:</td><td style="font-weight:600;">${order.customer.name}</td></tr>
          <tr><td style="color:#888;">Phone:</td><td><a href="tel:${order.customer.phone}" style="color:#1b5e20;font-weight:600;">${order.customer.phone}</a></td></tr>
          <tr><td style="color:#888;">Email:</td><td>${order.customer.email || 'Not provided'}</td></tr>
        </table>

        <h3 style="font-size:14px;color:#1b5e20;margin:0 0 8px;border-bottom:2px solid #e8f5e9;padding-bottom:4px;">📍 Delivery Address</h3>
        <p style="font-size:14px;color:#333;line-height:1.6;margin:0 0 16px;padding:10px;background:#f5f5f5;border-radius:4px;">
          ${order.customer.name}<br>
          ${order.customer.address}<br>
          ${order.customer.city} - ${order.customer.pincode}<br>
          📞 ${order.customer.phone}
        </p>

        <h3 style="font-size:14px;color:#1b5e20;margin:0 0 8px;border-bottom:2px solid #e8f5e9;padding-bottom:4px;">📦 Items to Dispatch</h3>
        <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
          <thead>
            <tr style="background:#f0f0f0;">
              <th style="padding:8px;border:1px solid #ddd;font-size:12px;">#</th>
              <th style="padding:8px;border:1px solid #ddd;font-size:12px;text-align:left;">Item</th>
              <th style="padding:8px;border:1px solid #ddd;font-size:12px;">Qty</th>
              <th style="padding:8px;border:1px solid #ddd;font-size:12px;">Amount</th>
            </tr>
          </thead>
          <tbody>
            ${itemRows}
          </tbody>
          <tfoot>
            <tr style="background:#f9f9f9;font-weight:700;">
              <td colspan="3" style="padding:8px;border:1px solid #ddd;text-align:right;">Total:</td>
              <td style="padding:8px;border:1px solid #ddd;text-align:right;color:#1b5e20;font-size:15px;">₹${order.totalAmount.toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
            </tr>
          </tfoot>
        </table>

        <div style="text-align:center;margin-top:16px;">
          <a href="https://ecoworld.earth/order-tracking.html?id=${order.orderId}" style="display:inline-block;background:#2e7d32;color:#fff;padding:10px 24px;border-radius:6px;text-decoration:none;font-weight:600;font-size:13px;">View Order</a>
        </div>
      </div>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"EcoWorld Orders" <sales@ecoworld.earth>`,
      to: 'admin@ecoworld.earth',
      subject: `🛒 New Order #${order.orderId} — ₹${order.totalAmount.toLocaleString('en-IN')} | ${order.customer.name}`,
      html
    });
    console.log(`Admin order notification sent for ${order.orderId}`);
  } catch (error) {
    console.error(`Admin order notification failed:`, error.message);
  }
}

/**
 * Send order status update email to customer
 */
async function sendOrderStatusUpdate(order, newStatus, note) {
  if (!process.env.EMAIL_USER) {
    console.error('STATUS EMAIL NOT SENT: EMAIL_USER env variable is not set');
    return;
  }
  if (!order.customer.email) {
    console.error('STATUS EMAIL NOT SENT: Customer email is missing for order', order.orderId);
    return;
  }

  const statusInfo = {
    confirmed: { icon: '✅', color: '#1565c0', bg: '#e3f2fd', label: 'Confirmed', msg: 'Your order has been confirmed and is being prepared.' },
    processing: { icon: '⚙️', color: '#7b1fa2', bg: '#f3e5f5', label: 'Processing', msg: 'Your order is being processed and packed.' },
    shipped: { icon: '🚚', color: '#2e7d32', bg: '#e8f5e9', label: 'Shipped', msg: 'Your order has been shipped and is on its way!' },
    out_for_delivery: { icon: '📦', color: '#00695c', bg: '#e0f7fa', label: 'Out for Delivery', msg: 'Your order is out for delivery. It will arrive today!' },
    delivered: { icon: '🎉', color: '#1b5e20', bg: '#c8e6c9', label: 'Delivered', msg: 'Your order has been delivered. Thank you for shopping with us!' },
    cancelled: { icon: '❌', color: '#c62828', bg: '#ffebee', label: 'Cancelled', msg: 'Your order has been cancelled.' }
  };

  const info = statusInfo[newStatus] || { icon: '📋', color: '#333', bg: '#f5f5f5', label: newStatus, msg: 'Your order status has been updated.' };

  const itemsList = order.items.map(i => `${i.name} × ${i.quantity}`).join(', ');

  const html = `
    <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;">
      <div style="background:linear-gradient(135deg,#1b5e20,#2e7d32);padding:24px;text-align:center;border-radius:8px 8px 0 0;">
        <h1 style="color:#fff;margin:0;font-size:22px;">🌿 EcoWorld.earth</h1>
        <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:14px;">Order Status Update</p>
      </div>

      <div style="padding:24px;">
        <h2 style="color:#333;font-size:18px;margin:0 0 16px;">Hi ${order.customer.name},</h2>

        <div style="background:${info.bg};border-left:4px solid ${info.color};padding:16px;border-radius:0 8px 8px 0;margin-bottom:20px;">
          <p style="margin:0;font-size:24px;">${info.icon}</p>
          <h3 style="color:${info.color};margin:8px 0 4px;font-size:16px;">Order ${info.label}</h3>
          <p style="color:#555;margin:0;font-size:14px;">${info.msg}</p>
        </div>

        <div style="background:#f9f9f9;padding:16px;border-radius:8px;margin-bottom:20px;">
          <table style="width:100%;font-size:14px;">
            <tr>
              <td style="color:#888;padding:4px 0;">Order ID:</td>
              <td style="font-weight:700;color:#1b5e20;font-family:monospace;">${order.orderId}</td>
            </tr>
            <tr>
              <td style="color:#888;padding:4px 0;">Items:</td>
              <td>${itemsList}</td>
            </tr>
            <tr>
              <td style="color:#888;padding:4px 0;">Total:</td>
              <td style="font-weight:700;">₹${order.totalAmount.toLocaleString('en-IN', {minimumFractionDigits: 2})}</td>
            </tr>
            ${order.trackingNumber ? `<tr>
              <td style="color:#888;padding:4px 0;">Tracking:</td>
              <td style="font-weight:600;">${order.trackingNumber}</td>
            </tr>` : ''}
            ${order.estimatedDelivery ? `<tr>
              <td style="color:#888;padding:4px 0;">Est. Delivery:</td>
              <td>${new Date(order.estimatedDelivery).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
            </tr>` : ''}
            ${note ? `<tr>
              <td style="color:#888;padding:4px 0;">Note:</td>
              <td>${note}</td>
            </tr>` : ''}
          </table>
        </div>

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
      subject: `${info.icon} Order ${info.label} — #${order.orderId} | EcoWorld.earth`,
      html
    });
    console.log(`Status update email sent for ${order.orderId} → ${newStatus}`);
  } catch (error) {
    console.error(`Status update email failed for ${order.orderId}:`, error.message);
  }
}
