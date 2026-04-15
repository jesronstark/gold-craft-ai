import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Reviews from './pages/Reviews';
import GoldRate from './pages/GoldRate';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Blog from './pages/Blog';
import AdminDashboard from './pages/AdminDashboard';
import WhatsAppFloat from './components/WhatsAppFloat';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/about" element={<About />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/gold-rate" element={<GoldRate />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppFloat />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;