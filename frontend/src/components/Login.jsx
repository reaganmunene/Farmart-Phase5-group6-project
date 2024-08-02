import React, { useState } from 'react';
import { loginUser } from '../services/userService';
import './Login.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('farmer');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await loginUser(email, password);
      console.log(response); // Handle the response as needed
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <label className="form-label">
          Account Type:
          <select value={userType} onChange={(e) => setUserType(e.target.value)} className="form-select">
            <option value="farmer">Farmer</option>
            <option value="buyer">Buyer</option>
          </select>
        </label>
        <label className="form-label">
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-input" />
        </label>
        <label className="form-label">
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="form-input" />
        </label>
        <button type="submit" className="form-button">Login</button>
      </form>
      <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
    </div>
  );
};

export default LoginForm;
