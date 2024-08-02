import React from 'react';
import './Display.css';

const Display = () => {
    return (
        <section className="display">
            <h2>We Have What You're Looking For</h2>
            <div className="columns">
                <div className="column">
                    <h3>For Food</h3>
                    <div className="icon-text">
                        <i className="icon">🍎</i>
                        <p>Eliminate middlemen and buy directly from the source, ensuring authenticity and transparency.</p>
                    </div>
                    <p>Our platform connects you with local farmers, giving you fresh produce at competitive prices.</p>
                </div>
                <div className="column">
                    <h3>For Companionship</h3>
                    <div className="icon-text">
                        <i className="icon">🐕</i>
                        <p>Find the perfect pet for your home.</p>
                    </div>
                    <p>Browse our selection of pets and find your new best friend from trusted breeders and owners.</p>
                </div>
                <div className="column">
                    <h3>For Work</h3>
                    <div className="icon-text">
                        <i className="icon">🚜</i>
                        <p>Get the best livestock for your farm work needs.</p>
                    </div>
                    <p>Enhance your farm's productivity by sourcing high-quality livestock directly from the farm.</p>
                </div>
            </div>
        </section>
    );
};

export default Display;
