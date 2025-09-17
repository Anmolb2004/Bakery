import React from 'react';
import './About.css';
import bakeryIllustration from '../assets/main1.png'; // We'll add this image soon

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h1>Food Of The Gods, Freshly Baked!</h1>
        <p className="about-intro">
          Since 2024, we've been serving our guests the best quality treats,
          traditionally made and presented with care.
        </p>
      </div>

      <div className="about-content">
        <div className="about-left">
          <div className="about-point">
            <h3>AUTHENTIC RECIPES</h3>
            <p>Our products are based on traditional home-style recipes using fresh ingredients.</p>
          </div>
          <div className="about-point">
            <h3>BAKED WITH LOVE</h3>
            <p>Our passion for baking is poured into every recipe, serving smiles on a plate everyday.</p>
          </div>
        </div>

        <div className="about-center-image">
          <img src={bakeryIllustration} alt="Daisy & Dough Bakery Illustration" />
        </div>

        <div className="about-right">
          <div className="about-point">
            <h3>COMMITTED TO QUALITY</h3>
            <p>From our ingredients to our kitchen operations & guest services, we always prioritize quality.</p>
          </div>
          <div className="about-point">
            <h3>HONESTLY PRICED</h3>
            <p>We constantly strive to offer the best products at the right prices.</p>
          </div>
        </div>
      </div>

      {/* <div className="about-button-container">
        <a href="#more-info" className="about-button">KNOW MORE</a>
      </div> */}
    </section>
  );
};

export default About;