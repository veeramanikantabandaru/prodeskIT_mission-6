import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { loginAsGuest, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    loginAsGuest();
    navigate(from, { replace: true });
  };

  if (user) {
    return (
      <div className="login-container">
        <h2>You are already logged in</h2>
        <button onClick={() => navigate('/')} className="cta-button">Go Home</button>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <p>Please log in to continue your shopping journey.</p>
        <button onClick={handleLogin} className="guest-login-btn">
          Login as Guest
        </button>
      </div>
    </div>
  );
};

export default Login;
