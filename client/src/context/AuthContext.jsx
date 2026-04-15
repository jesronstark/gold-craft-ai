import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('gc_user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (email) => {
    const mockUser = {
      name: "Priya Sharma",
      email: email,
      phone: "9876543210",
      city: "Chennai",
      avatar: "PS",
      orders: 3
    };
    localStorage.setItem('gc_user', JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const logout = () => {
    localStorage.removeItem('gc_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};