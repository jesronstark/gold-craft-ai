const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Product = require('../models/Product');
const Order = require('../models/Order');
const Review = require('../models/Review');
const adminAuth = require('../middleware/adminAuth');

// --- PUBLIC ROUTES ---

// Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single product
router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get Live Gold Rate (Mock data based on bank auction logic)
router.get('/gold-rate', (req, res) => {
  // In a real app, this would fetch from an API like Metals-API
  res.json({
    date: new Date(),
    rates: {
      '24K': 7150, // per gram (mock rate lower than retail)
      '22K': 6554,
      '18K': 5362
    },
    source: 'Bank Auction Procured'
  });
});

// Get latest reviews (paginated)
router.get('/reviews', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const startIndex = (page - 1) * limit;

    const reviews = await Review.find({ status: 'Approved' }).sort({ createdAt: -1 }).limit(limit).skip(startIndex);
    const total = await Review.countDocuments({ status: 'Approved' });
    
    res.json({
      reviews,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      totalReviews: total
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create Order (Simulated, as actual buy triggers WhatsApp)
router.post('/orders', async (req, res) => {
  try {
    const order = new Order(req.body);
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Contact form 
router.post('/contact', (req, res) => {
  // normally would send an email
  res.json({ message: 'Message received. We will contact you shortly.' });
});


// --- ADMIN ROUTES ---

// Admin Login
router.post('/admin/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'admin@goldcraft.com' && password === 'GoldCraft@2024') {
    const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Get Dashboard Stats
router.get('/admin/dashboard', adminAuth, async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();
    const productCount = await Product.countDocuments();
    const customerCount = await Order.distinct('phone').then(arr => arr.length);
    
    // Calculate total revenue from completed/delivered orders, or all for mock
    const orders = await Order.find();
    const revenue = orders.reduce((acc, curr) => acc + curr.totalAmount, 0);

    res.json({ totalOrders, productCount, customerCount, revenue });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Admin Bank Auction Secret Data
router.get('/admin/auction-data', adminAuth, (req, res) => {
  res.json({
    todayBankRate: { '24K': 6900, '22K': 6350 },
    batchNumber: 'BA-2024-001',
    sourceBank: 'State Bank of India - Chennai Branch',
    procurementCost: 4500000,
    profitMargin: '12%',
    status: 'Procured & Quality Checked'
  });
});

// Basic CRUD for products (Admin)
router.post('/admin/products', adminAuth, async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/admin/products/:id', adminAuth, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/admin/products/:id', adminAuth, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Orders for Admin
router.get('/admin/orders', adminAuth, async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/admin/orders/:id/status', adminAuth, async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
