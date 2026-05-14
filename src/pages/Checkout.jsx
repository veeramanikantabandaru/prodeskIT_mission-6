import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();

  useEffect(() => {
    // In a real app, we would process the payment here
    // For now, we just clear the cart after a few seconds or on mount
    return () => {
      // Logic could be added here
    };
  }, []);

  const handlePlaceOrder = () => {
    alert("Order placed successfully! Thank you for shopping with ShopZone.");
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-container empty">
        <h2>Your order has been processed!</h2>
        <p>Check your email for confirmation.</p>
        <Link to="/shop" className="cta-button">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-layout">
        <div className="order-summary-box">
          <h2>Order Summary</h2>
          <div className="checkout-items">
            {cart.map(item => (
              <div key={item.id} className="checkout-item">
                <span>{item.title} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="checkout-total">
            <span>Total to Pay:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button onClick={handlePlaceOrder} className="place-order-btn">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
