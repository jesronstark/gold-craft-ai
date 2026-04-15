const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  avatar: { type: String },
  rating: { type: Number, required: true },
  reviewText: { type: String, required: true },
  verifiedPurchase: { type: Boolean, default: true },
  status: { type: String, enum: ['Approved', 'Pending', 'Rejected'], default: 'Approved' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);
