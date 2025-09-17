import React from 'react';
import './Popup.css';
import { FaTimes, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    // The overlay that covers the screen
    <div className="popup-overlay" onClick={onClose}>
      {/* The popup content itself, stopPropagation prevents closing when clicking inside */}
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        
        <h2>Place Your Order</h2>
        <p>We're excited to bake for you! For a personal touch and quick response, please place your order via Instagram DM or WhatsApp.</p>
        
        <div className="popup-actions">
          <a href="https://www.instagram.com/daisyyndough" target="_blank" rel="noopener noreferrer" className="popup-btn instagram">
            <FaInstagram /> Chat on Instagram
          </a>
          <a href="https://wa.me/919872108230" target="_blank" rel="noopener noreferrer" className="popup-btn whatsapp">
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;