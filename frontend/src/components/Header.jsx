import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'collapsed' : ''}`}>
            <div className="top-header">
                <div className="logo">
                    Farmart 🧺
                </div>
                <input type="text" placeholder="🔍 Search..." className="search-bar" />
                <nav className="top-nav">
                    <Link to="/about" className="nav-link">About 📖</Link>
                    <Link to="/register" className="nav-link">Register 📝</Link>
                    <Link to="/login" className="nav-link">Login 🔑</Link>
                    <Link to="/cart" className="nav-link">Cart 🛒</Link>
                </nav>
            </div>
            <div className="navbar">
                <Link to="/cows" className="nav-item">Cows </Link>
                <Link to="/sheep" className="nav-item">Sheep </Link>
                <Link to="/dogs" className="nav-item">Dogs</Link>
                <Link to="/rabbits" className="nav-item">Rabbits</Link>
                <Link to="/pigs" className="nav-item">Pigs </Link>
                <Link to="/goats" className="nav-item">Goats</Link>
                <Link to="/poultry" className="nav-item">Poultry </Link>
                <Link to="/camels" className="nav-item">Camels </Link>
                <Link to="/cats" className="nav-item">Cats </Link>
                <Link to="/others" className="nav-item">Others </Link>
            </div>
        </header>
    );
};

export default Header;
