import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ShopZone</h1>
          <p>Discover the latest trends in electronics, fashion, and more.</p>
          <Link to="/shop" className="cta-button">Start Shopping</Link>
        </div>
      </section>
      
      <section className="featured-info">
        <div className="info-card">
          <h3>Quality Products</h3>
          <p>Handpicked inventory from top brands.</p>
        </div>
        <div className="info-card">
          <h3>Fast Delivery</h3>
          <p>Get your items delivered within 48 hours.</p>
        </div>
        <div className="info-card">
          <h3>24/7 Support</h3>
          <p>Our team is always here to help you.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
