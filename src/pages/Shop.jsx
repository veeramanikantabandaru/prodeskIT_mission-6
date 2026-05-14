import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <div className="shop-container">
      <h2>Explore our Collection</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p className="price">${product.price}</p>
              <Link to={`/product/${product.id}`} className="view-details">View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
