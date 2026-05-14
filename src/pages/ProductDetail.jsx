import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching product details:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading">Loading details...</div>;
  }

  if (!product) {
    return <div className="error">Product not found.</div>;
  }

  return (
    <div className="product-detail-container">
      <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
      <div className="product-detail-layout">
        <div className="product-image">
          <img src={product.images[0]} alt={product.title} />
        </div>
        <div className="product-details">
          <h1>{product.title}</h1>
          <p className="brand">Brand: {product.brand}</p>
          <p className="description">{product.description}</p>
          <p className="detail-price">${product.price}</p>
          <div className="detail-actions">
            <button onClick={() => addToCart(product)} className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
