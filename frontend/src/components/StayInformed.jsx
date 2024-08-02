import React from 'react';
import './StayInformed.css';

const StayInformed = () => {
    return (
        <section className="stay-informed">
            <h2>Stay Informed</h2>
            <div className="news-items">
                <div className="news-item">
                    <div className="emoji-container">
                        <span className="emoji">📰</span>
                    </div>
                    <div className="news-text">Latest updates on livestock and farming practices.</div>
                </div>
                <div className="news-item">
                    <div className="emoji-container">
                        <span className="emoji">📈</span>
                    </div>
                    <div className="news-text">Market trends and insights for farmers.</div>
                </div>
            </div>
        </section>
    );
};

export default StayInformed;
