import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contact-info">
                <p><span role="img" aria-label="email">📧</span> contact@farmart.com</p>
                <p><span role="img" aria-label="instagram">📸</span> Instagram: @farmart</p>
                <p><span role="img" aria-label="phone">📞</span> 123-456-7890</p>
                <p><span role="img" aria-label="address">🏠</span> 123 Farmart St, Farmville</p>
            </div>
            <div className="social-media">
                <a href="https://facebook.com" className="social-link">Facebook <span role="img" aria-label="facebook">📘</span></a>
                <a href="https://twitter.com" className="social-link">X <span role="img" aria-label="twitter">🐦</span></a>
                <a href="https://instagram.com" className="social-link">Instagram <span role="img" aria-label="instagram">📸</span></a>
            </div>
            <div className="newsletter">
                <input type="email" placeholder="Subscribe to our newsletter" />
                <button>Subscribe</button>
            </div>
        </footer>
    );
};

export default Footer;
