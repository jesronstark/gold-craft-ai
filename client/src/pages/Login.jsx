import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login(email || "test@test.com");
    navigate('/profile');
  };

  return (
    <div className="container mx-auto py-20 flex justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-playfair font-bold text-center mb-6 text-primary">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email Address</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full p-2 border rounded focus:outline-primary" placeholder="Enter any email" />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required className="w-full p-2 border rounded focus:outline-primary" placeholder="Enter any password" />
          </div>
          <button type="submit" className="btn-primary w-full py-3">Instant Demo Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;