import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { totalItems } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">ShopZone</Link>
      </div>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/shop" className={({ isActive }) => (isActive ? 'active' : '')}>Shop</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
      </div>
      <div className="nav-actions">
        {user ? (
          <button onClick={logout} className="logout-btn">Logout</button>
        ) : (
          <Link to="/login" className="login-link">Login</Link>
        )}
        <Link to="/cart" className="cart-link">
          <span className="cart-icon">🛒</span>
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
