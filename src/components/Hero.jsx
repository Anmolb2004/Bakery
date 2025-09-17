import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroImage from '../assets/hero-split.png'; // Make sure this path is correct

const Hero = () => {
  return (
    <section className="hero-split">
      <div className="hero-text-content">
        <h1 className="hero-title-split">Artfully Baked, Just For You.</h1>
        <p className="hero-subtitle-split">
          Discover a world of exquisite flavors, where every creation is a masterpiece made with passion and the finest ingredients.
        </p>
        <div className="hero-buttons">
          <Link to="/menu" className="btn btn-primary">Explore The Menu</Link>
          <a href="#about" className="btn btn-secondary">Our Story</a>
        </div>
      </div>
      <div className="hero-image-content">
        <img src={heroImage} alt="Artisan bakery cake" />
      </div>
    </section>
  );
};

export default Hero;