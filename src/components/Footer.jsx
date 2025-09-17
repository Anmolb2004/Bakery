import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="footer-pro">
      <div className="footer-container-pro">
        <div className="footer-col">
          <h3 className="footer-logo-pro">Daisy & Dough</h3>
          <p>Handcrafted with passion, baked to perfection. Bringing you the finest homemade treats.</p>
          <div className="social-links-pro">
            <a href="https://www.instagram.com/daisyyndough" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://wa.me/919872108230" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>OUR STORY</h4>
          <ul>
            <li><a href="/#about">About Us</a></li>
            <li><Link to="/menu">Our Products</Link></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>GET IN TOUCH</h4>
          <ul>
            <li>+91 9872108230</li>
            <li>orders@daisyanddough.com</li>
            <li>Chandigarh, India</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>SIGN UP FOR UPDATES</h4>
          <form className="newsletter-form-pro">
            <input type="email" placeholder="Enter your email..." required />
            <button type="submit">SIGN UP</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom-pro">
        <p>&copy; {new Date().getFullYear()} Daisy & Dough. All Rights Reserved.</p>
      </div>

      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top">
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;