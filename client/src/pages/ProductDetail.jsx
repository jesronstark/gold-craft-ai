import { useParams } from 'react-router-dom';
const ProductDetail = () => {
  const { id } = useParams();
  
  const handleBuyNow = () => {
    const message = `Hello Gold Craft! I want to order:\nProduct: Sample Necklace \nWeight: 20g | Purity: 22K\nQty: 1 | Total: ₹135,000\nPlease confirm my order.`;
    window.open(`https://wa.me/919629199741?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <img src="https://images.unsplash.com/photo-1599643478524-fb66f70d00f8?auto=format&fit=crop&w=800&q=80" className="w-full rounded-lg shadow-lg" alt="Product" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-playfair font-bold mb-4">Antique 22k Wedding Choker</h1>
          <p className="text-2xl text-primary font-bold mb-4">₹135,000</p>
          <div className="bg-cream p-4 rounded mb-6">
            <p><strong>Purity:</strong> 22K Hallmarked</p>
            <p><strong>Weight:</strong> 20.5g</p>
            <p><strong>Making Charges:</strong> 8% (Bank Auction special)</p>
          </div>
          <p className="mb-6 text-gray-700">A stunning masterpiece crafted from premium quality gold sourced directly from certified bank auctions. Enjoy wholesale rates without compromising on purity or design.</p>
          
          <button onClick={handleBuyNow} className="btn-primary w-full text-lg py-3 flex justify-center items-center gap-2">
            Buy via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;