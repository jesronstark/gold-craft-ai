const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true }, // Rings, Necklaces, Bangles, Earrings, Coins, Gold Bars
  images: [{ type: String }],
  purity: { type: String, required: true }, // 18K, 22K, 24K
  weight: { type: Number, required: true }, // in grams
  makingCharges: { type: Number, required: true }, // percentage
  basePrice: { type: Number, required: true }, // computed initial, but updated based on live rate ideally
  stock: { type: Number, required: true, default: 10 },
  ratings: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
