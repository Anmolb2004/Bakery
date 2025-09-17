import React from 'react';
import { FaHeart, FaLeaf, FaStar } from 'react-icons/fa';
import './WhyChooseUs.css';
import bakerImage from '../assets/logo1.jpeg'; // Make sure the path is correct

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="wcu-content-container">
        <h2 className="section-title">Our Promise To You</h2>
        <p className="section-intro">
          At Daisy & Dough, every treat is more than just dessert. It's a piece of our passion, a token of our tradition, and a commitment to quality you can taste.
        </p>
        <div className="features-list">
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <FaLeaf />
            </div>
            <div className="feature-text">
              <h3>Always Fresh</h3>
              <p>We bake fresh daily using the finest, locally-sourced ingredients from right here in Chandigarh.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <FaHeart />
            </div>
            <div className="feature-text">
              <h3>Baked With Love</h3>
              <p>Every single item is handcrafted with passion, following our cherished family recipes.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <FaStar />
            </div>
            <div className="feature-text">
              <h3>Commitment to Quality</h3>
              <p>From our kitchen to your table, we are committed to delivering the highest quality treats.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wcu-image-container">
        <img src={bakerImage} alt="Baker kneading dough with love" />
      </div>
    </section>
  );
};

export default WhyChooseUs;