require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');
const Review = require('./models/Review');
const Order = require('./models/Order');

// Mock Products
const products = [
  {
    name: "Classic 22k Gold Bangles",
    description: "Pure 22K gold bangles authenticated via bank auction. Save up to 15% compared to retail prices.",
    category: "Bangles",
    images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
    purity: "22K",
    weight: 20,
    makingCharges: 8,
    basePrice: 135000,
    stock: 5,
    ratings: 4.8,
    numReviews: 124
  },
  {
    name: "Royal 24k Gold Coin 10g",
    description: "Investment grade 24K pure gold coin. BIS hallmarked.",
    category: "Coins",
    images: ["https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
    purity: "24K",
    weight: 10,
    makingCharges: 2,
    basePrice: 71500,
    stock: 50,
    ratings: 4.9,
    numReviews: 210
  },
  {
    name: "Elegant 18k Rose Gold Necklace",
    description: "Beautifully crafted 18k rose gold necklace daily wear.",
    category: "Necklaces",
    images: ["https://images.unsplash.com/photo-1599643478524-fb66f70d00f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
    purity: "18K",
    weight: 15,
    makingCharges: 12,
    basePrice: 85000,
    stock: 3,
    ratings: 4.7,
    numReviews: 45
  },
  {
    name: "Traditional Temple Gold Ring",
    description: "22K temple design ring perfect for festive occasions. Handpicked from direct bank auctions.",
    category: "Rings",
    images: ["https://images.unsplash.com/photo-1605100804763-247f67b2548e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
    purity: "22K",
    weight: 8,
    makingCharges: 10,
    basePrice: 55000,
    stock: 12,
    ratings: 4.6,
    numReviews: 88
  },
  {
    name: "24k Pure Gold Bar 50g",
    description: "50 grams 24K pure gold bar for serious investors.",
    category: "Gold Bars",
    images: ["https://images.unsplash.com/photo-1589132223849-5f2575231c51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
    purity: "24K",
    weight: 50,
    makingCharges: 1,
    basePrice: 357500,
    stock: 8,
    ratings: 5.0,
    numReviews: 145
  },
  {
    name: "Diamond Studded 18k Earrings",
    description: "18k gold earrings studded with lab-grown diamonds.",
    category: "Earrings",
    images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
    purity: "18K",
    weight: 5,
    makingCharges: 15,
    basePrice: 35000,
    stock: 15,
    ratings: 4.8,
    numReviews: 92
  },
  {
    name: "Antique 22k Wedding Choker",
    description: "Heavy 22k antique finish wedding choker necklace. A premium collection sourced directly from bank auctions.",
    category: "Necklaces",
    images: ["https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
    purity: "22K",
    weight: 45,
    makingCharges: 12,
    basePrice: 320000,
    stock: 2,
    ratings: 4.9,
    numReviews: 18
  },
  {
    name: "Simple 22k Everyday Chain",
    description: "Everyday wear 22k gold chain. Durable and hallmarked.",
    category: "Necklaces",
    images: ["https://images.unsplash.com/photo-1602752003882-7206b0008dd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
    purity: "22K",
    weight: 12,
    makingCharges: 7,
    basePrice: 84000,
    stock: 25,
    ratings: 4.7,
    numReviews: 320
  }
];

const reviews = [
  {
    name: "Priya Sharma",
    city: "Chennai",
    avatar: "PS",
    rating: 5,
    reviewText: "I was skeptical about buying bank auction gold, but Gold Craft proved me wrong. The 22k bangles are beautiful and I saved at least ₹15,000 compared to Kalyan Jewellers.",
    verifiedPurchase: true
  },
  {
    name: "Karthik R",
    city: "Coimbatore",
    avatar: "KR",
    rating: 5,
    reviewText: "Excellent transparent pricing. I bought a 10g 24K coin for investment. Their WhatsApp support was very helpful and delivery was secure.",
    verifiedPurchase: true
  },
  {
    name: "Anitha V",
    city: "Madurai",
    avatar: "AV",
    rating: 4,
    reviewText: "Lovely designs. The making charges are genuinely low. Will buy again during Diwali.",
    verifiedPurchase: true
  },
  {
    name: "Suresh Kumar",
    city: "Salem",
    avatar: "SK",
    rating: 5,
    reviewText: "Procurement from bank auctions is a smart concept. We get the exact same BIS hallmarked jewelry at a fraction of showroom price.",
    verifiedPurchase: true
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB Connected');
    
    await Product.deleteMany({});
    await Review.deleteMany({});
    await Order.deleteMany({});
    
    await Product.insertMany(products);
    await Review.insertMany(reviews);
    
    console.log('Database seeded!');
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
