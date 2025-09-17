import React from 'react';
import './About.css';
import bakeryIllustration from '../assets/main1.png'; 

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h1>Where Every Batch Tells a Story</h1>
        <p className="about-intro">
          Welcome to Daisy & Dough! We’re a small Chandigarh bakery with a simple mission: to share a little sweetness, one handcrafted treat at a time.
        </p>
      </div>

      <div className="about-content">
        <div className="about-left">
          <div className="about-point">
            <h3>OUR CHERISHED RECIPES</h3>
            <p>Our home-style recipes deliver a taste that's both nostalgic and wonderfully new.</p>
          </div>
          <div className="about-point">
            <h3>A DASH OF PASSION</h3>
            <p>Baking is our art. We pour our hearts into every item to serve you a piece of happiness.</p>
          </div>
        </div>

        <div className="about-center-image">
          <img src={bakeryIllustration} alt="Daisy & Dough Bakery Illustration" />
        </div>

        <div className="about-right">
          <div className="about-point">
            <h3>UNCOMPROMISING QUALITY</h3>
            <p>Great taste starts with the finest local ingredients. We never take shortcuts.</p>
          </div>
          <div className="about-point">
            <h3>SWEETNESS FOR EVERYONE</h3>
            <p>We offer handcrafted quality at a fair price, because everyone deserves a special treat.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;