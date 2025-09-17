import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // 1. Import HashLink
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import Popup from './Popup';

const Navbar = ({ setSearchQuery }) => { 
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isMenuPage = location.pathname === '/menu';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const headerClass = `header ${!isHomePage || scrolled ? 'scrolled' : ''}`;

  return (
    <>
      <header className={headerClass}>
        <nav className="navbar">
          <div className="navbar-left">
            <div className="navbar-logo">
              <Link to="/" onClick={closeMenu}>Daisy & Dough</Link>
            </div>
          </div>

          <div className="navbar-center">
            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
              <li onClick={closeMenu}><Link to="/">HOME</Link></li>
              <li onClick={closeMenu}><Link to="/menu">MENU</Link></li>
              {/* 2. Replace <a> with HashLink for smooth scrolling */}
              <li onClick={closeMenu}><HashLink to="/#contact">CONTACT US</HashLink></li>
            </ul>
          </div>

          <div className="navbar-right">
            {isMenuPage && (
              <div className="search-container">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            )}
            <button className="order-btn" onClick={() => setIsPopupOpen(true)}>
              ORDER ONLINE
            </button>
            <div className="hamburger-menu" onClick={toggleMenu}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </nav>
      </header>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default Navbar;