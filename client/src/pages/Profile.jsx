import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <div className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden flex flex-col md:flex-row gap-8 items-center border border-gray-100">
        <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center text-5xl text-dark font-bold shadow-inner">
          {user.avatar}
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-playfair font-bold mb-2">Welcome back, {user.name}!</h1>
          <p className="text-gray-600 mb-1">{user.email} | +91 {user.phone}</p>
          <p className="text-gray-600">{user.city}, Tamil Nadu</p>
        </div>
        <div>
          <button onClick={() => { logout(); navigate('/'); }} className="btn-secondary">Logout</button>
        </div>
      </div>
      
      <div className="mt-12 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 font-playfair border-b pb-4">Your Recent Orders</h2>
        <div className="space-y-4">
          {[1,2,3].map((order, i) => (
            <div key={i} className="flex justify-between items-center bg-cream p-4 rounded border border-gray-200">
              <div>
                <p className="font-bold">Order #ORD-{Math.floor(Math.random() * 10000)}</p>
                <p className="text-sm text-gray-600">22K Gold Chain - 15g</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary">₹85,000</p>
                <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">Delivered</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Profile;