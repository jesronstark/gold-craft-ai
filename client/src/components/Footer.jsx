const Footer = () => (
  <footer className="bg-dark text-white p-10 mt-10">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-playfair font-bold text-primary mb-4">GOLD CRAFT PVT. LTD.</h3>
        <p className="text-sm text-gray-400">Bank Auction Gold — Certified. Pure. Affordable.</p>
        <p className="text-sm mt-4">123, Anna Salai, Chennai, Tamil Nadu 600002</p>
      </div>
      <div>
        <h4 className="font-bold mb-4">Quick Links</h4>
        <ul className="text-sm text-gray-400 space-y-2">
          <li><a href="/products">Shop</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/gold-rate">Live Gold Rate</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Trust & Safety</h4>
        <ul className="text-sm text-gray-400 space-y-2">
          <li>BIS Hallmarked 100%</li>
          <li>RBI Payment Guidelines</li>
          <li>Secure Shipping</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Live Rate Widget</h4>
        <div className="bg-gray-800 p-4 rounded text-sm">
          <p>24K: ₹7150/g</p>
          <p>22K: ₹6554/g</p>
        </div>
      </div>
    </div>
    <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
      © 2026 Gold Craft Pvt. Ltd. All rights reserved.
    </div>
  </footer>
);
export default Footer;