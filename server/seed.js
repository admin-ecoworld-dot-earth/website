// Run: node seed.js
// Seeds the Products collection with sample eco-friendly products
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  { name: 'Bamboo Toothbrush', price: 99, category: 'personal-care', icon: 'fas fa-tooth', description: 'Eco-friendly bamboo toothbrush with soft bristles' },
  { name: 'Organic Cotton Tote Bag', price: 249, category: 'bags', icon: 'fas fa-shopping-bag', description: 'Reusable 100% organic cotton shopping bag' },
  { name: 'Stainless Steel Water Bottle', price: 599, category: 'kitchenware', icon: 'fas fa-wine-bottle', description: 'BPA-free insulated 500ml water bottle' },
  { name: 'Bamboo Cutlery Set', price: 349, category: 'kitchenware', icon: 'fas fa-utensils', description: 'Portable bamboo fork, spoon, knife & straw set' },
  { name: 'Natural Beeswax Wraps (3-Pack)', price: 449, category: 'kitchenware', icon: 'fas fa-box', description: 'Reusable food wraps — replace plastic cling film' },
  { name: 'Coconut Shell Bowl', price: 199, category: 'kitchenware', icon: 'fas fa-bowl-rice', description: 'Handcrafted polished coconut shell bowl' },
  { name: 'Hemp Notebook', price: 179, category: 'stationery', icon: 'fas fa-book', description: 'A5 notebook made from recycled hemp paper' },
  { name: 'Organic Soap Bar (Neem)', price: 129, category: 'personal-care', icon: 'fas fa-soap', description: 'Handmade cold-pressed neem soap bar' },
  { name: 'Jute Coasters Set (6)', price: 299, category: 'home-decor', icon: 'fas fa-couch', description: 'Natural jute round coasters, set of 6' },
  { name: 'Reusable Produce Bags (5-Pack)', price: 399, category: 'bags', icon: 'fas fa-leaf', description: 'Mesh cotton bags for fruits & vegetables' },
  { name: 'Seed Paper Greeting Cards (10)', price: 249, category: 'stationery', icon: 'fas fa-envelope', description: 'Plant the card after reading — it grows flowers!' },
  { name: 'Bamboo Sunglasses', price: 799, category: 'accessories', icon: 'fas fa-glasses', description: 'UV400 polarized lenses with bamboo frame' },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await Product.deleteMany({});
    console.log('Cleared existing products');

    await Product.insertMany(products);
    console.log(`Seeded ${products.length} products`);

    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
}

seed();
