import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-primary drop-shadow-lg">Buy Bank Auction Gold</h1>
          <p className="text-xl md:text-2xl mb-8">Pure. Certified. Affordable.</p>
          <div className="bg-gray-800 bg-opacity-70 inline-block p-4 rounded-lg mb-8 backdrop-blur-sm border border-primary">
            <p className="text-lg font-bold text-primary">Live Auction Rates:</p>
            <div className="flex gap-4 mt-2">
              <span>24K: ₹7150/g</span> | <span>22K: ₹6554/g</span> | <span>18K: ₹5362/g</span>
            </div>
          </div>
          <br/>
          <Link to="/products" className="btn-primary text-xl px-8 py-3">Shop Now</Link>
        </div>
      </div>

      {/* Why Gold Craft */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-playfair font-bold text-center mb-12">Why Choose Gold Craft?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="card p-6">
            <h3 className="text-xl font-bold text-primary mb-2">Bank Auction Price</h3>
            <p>We source directly from bank auctions to give you wholesale prices.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-bold text-primary mb-2">BIS Certified</h3>
            <p>100% authentic HUID hallmarked jewelry.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-bold text-primary mb-2">Instant Delivery</h3>
            <p>Secured and insured delivery across Tamil Nadu.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-bold text-primary mb-2">15,000+ Happy Customers</h3>
            <p>Trusted by thousands of families.</p>
          </div>
        </div>
      </div>
      
      {/* How it works */}
      <div className="bg-cream py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-playfair font-bold mb-12">How We Source Gold</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex-1">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2">Bank Auction</h3>
              <p className="text-sm">We buy pledged unredeemed gold straight from nationalized banks.</p>
            </div>
            <div className="text-primary hidden md:block">→</div>
            <div className="flex-1">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2">Quality Check</h3>
              <p className="text-sm">Melted, purified and redesigned into modern BIS certified jewelry.</p>
            </div>
            <div className="text-primary hidden md:block">→</div>
            <div className="flex-1">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2">Delivered to You</h3>
              <p className="text-sm">You get 100% pure gold at prices lower than retail showrooms.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;