import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="testimonial">
                <div className="circle">
                    <span role="img" aria-label="Reviewer 1" className="emoji">🌟</span>
                </div>
                <h3>Mary Kamau</h3>
                <blockquote>"With Farmart, I increased my sales by 40% within the first month, thanks to their wider buyer network."</blockquote>
            </div>
            <div className="testimonial">
                <div className="circle">
                    <span role="img" aria-label="Reviewer 2" className="emoji">🚀</span>
                </div>
                <h3>Salim Hassan</h3>
                <blockquote>"By using Farmart, I secured camels for my business at a competitive price, saving 20% compared to other sources."</blockquote>
            </div>
            <div className="testimonial">
                <div className="circle">
                    <span role="img" aria-label="Reviewer 3" className="emoji">🏆</span>
                </div>
                <h3>Melinda Grey</h3>
                <blockquote>"I saved 25% on the purchase of my horse through Farmart, compared to traditional market prices."</blockquote>
            </div>
        </section>
    );
};

export default Testimonials;
