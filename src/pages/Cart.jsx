import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/shop" className="cta-button">Browse Shop</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.title} />
              <div className="item-info">
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Items:</span>
            <span>{totalItems}</span>
          </div>
          <div className="summary-row total">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button onClick={() => navigate('/checkout')} className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
