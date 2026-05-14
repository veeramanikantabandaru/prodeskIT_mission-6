import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('shopzone_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const loginAsGuest = () => {
    const guestUser = { id: 'guest_123', name: 'Guest User', loggedIn: true };
    setUser(guestUser);
    localStorage.setItem('shopzone_user', JSON.stringify(guestUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('shopzone_user');
  };

  return (
    <AuthContext.Provider value={{ user, loginAsGuest, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
