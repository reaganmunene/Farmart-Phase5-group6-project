import React, { useState } from 'react';
import { registerUser } from '../services/userService';
import './Register.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('farmer');
  const [phone, setPhone] = useState('');
  const [county, setCounty] = useState('');
  const [town, setTown] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }
    try {
      const response = await registerUser(email, password, userType, phone, county, town);
      setMessage(response.message); // Assuming the backend sends a 'message' in the response
    } catch (error) {
      setMessage('Registration failed');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister} className="register-form">
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
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-input" />
        </label>
        <label className="form-label">
          County:
          <input type="text" value={county} onChange={(e) => setCounty(e.target.value)} className="form-input" />
        </label>
        <label className="form-label">
          Town:
          <input type="text" value={town} onChange={(e) => setTown(e.target.value)} className="form-input" />
        </label>
        <label className="form-label">
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="form-input" />
        </label>
        <label className="form-label">
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="form-input" />
        </label>
        <button type="submit" className="form-button">Register</button>
      </form>
      {message && <p className="form-message">{message}</p>}
    </div>
  );
};

export default RegisterForm;
