import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  
  // Generating 24 realistic products on frontend due to missing backend data in local setup
  useEffect(() => {
    const categories = ["Rings", "Necklaces", "Bangles", "Earrings", "Coins", "Gold Bars"];
    const images = [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1599643478524-fb66f70d00f8?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80"
    ];
    let mockData = [];
    for(let i=1; i<=24; i++) {
       mockData.push({
         _id: i.toString(),
         name: `${categories[Math.floor(Math.random()*categories.length)]} Style ${i}`,
         purity: i%3===0 ? "18K" : i%2===0 ? "24K" : "22K",
         weight: Math.floor(Math.random() * 40) + 5,
         price: Math.floor(Math.random() * 200000) + 20000,
         image: images[i % images.length]
       });
    }
    setProducts(mockData);
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-playfair font-bold text-center mb-8">Our Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(p => (
          <div key={p._id} className="card">
            <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.purity} | {p.weight}g</p>
              <p className="text-xl font-bold mt-2 text-primary">₹{p.price.toLocaleString()}</p>
              <Link to={`/products/${p._id}`} className="mt-4 block text-center btn-primary w-full">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;