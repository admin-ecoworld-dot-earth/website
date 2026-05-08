# EcoWorld Backend - Deployment Guide

## Quick Deploy on Render.com (Free Tier)

### 1. Push to GitHub
Push the `server/` folder to a separate GitHub repo (e.g., `ecoworld-backend`).

### 2. Create Render Web Service
1. Go to [render.com](https://render.com) → New → Web Service
2. Connect your GitHub repo
3. Settings:
   - **Root Directory**: (leave blank or `.`)
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`
   - **Instance Type**: Free

### 3. Set Environment Variables
In Render dashboard → Environment:

| Key | Value |
|-----|-------|
| `RAZORPAY_KEY_ID` | Your Razorpay key (get from dashboard.razorpay.com) |
| `RAZORPAY_KEY_SECRET` | Your Razorpay secret |
| `MONGODB_URI` | Your MongoDB Atlas connection string |
| `FRONTEND_URL` | `https://ecoworld.earth` |
| `RAZORPAY_WEBHOOK_SECRET` | Set in Razorpay webhook settings |

### 4. MongoDB Atlas (Free)
1. Go to [mongodb.com/atlas](https://mongodb.com/atlas) → Create free cluster
2. Create database user (username/password)
3. Whitelist `0.0.0.0/0` for access from Render
4. Get connection string → paste as `MONGODB_URI`

### 5. Razorpay Setup
1. Sign up at [razorpay.com](https://razorpay.com)
2. Complete KYC verification
3. Get API Keys from Settings → API Keys
4. Set up Webhook:
   - URL: `https://your-backend.onrender.com/api/payment/webhook`
   - Secret: (generate one, save as `RAZORPAY_WEBHOOK_SECRET`)
   - Events: `payment.captured`, `payment.failed`

### 6. Update Frontend
After deploying, update `API_BASE` in these files:
- `cart.html` (line with `const API_BASE = ...`)
- `order-tracking.html` (line with `const API_BASE = ...`)

Replace `https://your-backend.onrender.com/api` with your actual Render URL.

Also update `RAZORPAY_KEY_ID` in `cart.html` (the `key` field in Razorpay options).

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/payment/create-order` | Create Razorpay order |
| POST | `/api/payment/verify` | Verify payment signature |
| POST | `/api/payment/webhook` | Razorpay webhook handler |
| GET | `/api/orders/track/:orderId` | Track order by ID |
| GET | `/api/orders/phone/:phone` | Get orders by phone |
| PATCH | `/api/orders/:orderId/status` | Update order status (admin) |
| GET | `/api/health` | Health check |

## Testing
Use Razorpay test mode keys first. Test card: `4111 1111 1111 1111`, any future expiry, any CVV.
