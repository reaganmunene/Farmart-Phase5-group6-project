import React, { useEffect, useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
    const [farmers, setFarmers] = useState(0);
    const [buyers, setBuyers] = useState(0);
    const [animals, setAnimals] = useState(0);

    useEffect(() => {
        const incrementNumbers = () => {
            const targetFarmers = 1000;
            const targetBuyers = 5000;
            const targetAnimals = 15000;

            const increment = (setter, target) => {
                const interval = setInterval(() => {
                    setter((prev) => {
                        if (prev < target) {
                            return prev + Math.ceil(target / 100);
                        } else {
                            clearInterval(interval);
                            return target;
                        }
                    });
                }, 50);
            };

            increment(setFarmers, targetFarmers);
            increment(setBuyers, targetBuyers);
            increment(setAnimals, targetAnimals);
        };

        incrementNumbers();
    }, []);

    return (
        <section className="about-us">
            <div className="emoji-container">

                
                <span className="emoji">🚀</span>
            </div>
            <h2>Why Choose Farmart?</h2>
            <p>
                At Farmart, we’re transforming the livestock market with our innovative platform. We don’t just connect farmers and buyers; we build a community where trust and transparency are paramount. With Farmart, you get direct access to a range of animals including horses, dogs, and camels, cutting out the middlemen and ensuring fair prices for both parties. Our commitment to quality and reliability makes it easy to find the best animals for your needs. Join us in revolutionizing the way livestock is bought and sold!
            </p>
            <div className="stats">
                <div className="stat-item">
                    <h3>Farmers</h3>
                    <p>{farmers}+ </p>
                </div>
                <div className="stat-item">
                    <h3>Buyers</h3>
                    <p>{buyers}+ </p>
                </div>
                <div className="stat-item">
                    <h3>Animals</h3>
                    <p>{animals}+ </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
