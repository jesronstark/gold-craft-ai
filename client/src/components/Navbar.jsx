import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import { ShoppingCart, User, Menu } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-dark text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-playfair font-bold text-primary">GOLD CRAFT</Link>
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/products" className="hover:text-primary transition">Products</Link>
          <Link to="/gold-rate" className="hover:text-primary transition">Live Rates</Link>
          <Link to="/how-it-works" className="hover:text-primary transition">How it Works</Link>
          <Link to="/about" className="hover:text-primary transition">About</Link>
          
          <Link to="/cart" className="relative ml-4">
            <ShoppingCart className="hover:text-primary transition" />
            {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-primary text-xs rounded-full w-4 h-4 flex items-center justify-center">{cart.length}</span>}
          </Link>

          {user ? (
            <div className="relative group">
              <Link to="/profile" className="flex items-center gap-2 text-primary font-semibold">
                <div className="w-8 h-8 rounded-full bg-primary text-dark flex items-center justify-center font-bold">
                  {user.avatar}
                </div>
                {user.name}
              </Link>
            </div>
          ) : (
            <Link to="/login" className="flex items-center gap-2 hover:text-primary transition">
              <User size={20} /> Login
            </Link>
          )}
        </div>
        <div className="md:hidden">
          <Menu className="text-white" />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;