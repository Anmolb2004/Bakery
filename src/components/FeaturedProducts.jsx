import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';

import cake1 from '../assets/cake1.png';
import cake2 from '../assets/cake2.png';
import cake3 from '../assets/cake3.png';

import tarts from '../assets/tarts.png'; 
import cookies1 from '../assets/cookies1.png';
import cookies2 from '../assets/cookies2.png';

const featuredItems = [
  { 
    name: 'Chocolate Ganache Cake', 
    image: cake3 
  },
  { 
    name: 'Butterscotch Cake', 
    image: cake2
  },
  { 
    name: 'Assorted Fruit Tarts', // New item name
    image: tarts // New image
  },
  { 
    name: 'Classic Fruit Cake', // Moved this down, adjusted name
    image: cake1
  },
  { 
    name: 'Choco Chip Cookies', // New item name
    image: cookies1 // New image
  },
  { 
    name: 'Oatmeal Raisin Cookies', // New item name
    image: cookies2 // New image
  },
];

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <div className="container">
        <h2 className="section-title">Our Most Loved Treats</h2>
        <div className="featured-grid">
          {featuredItems.map((item, index) => (
            <div key={index} className="featured-card">
              <div className="card-image-container">
                <img src={item.image} alt={item.name} className="featured-image" />
                <div className="card-overlay">
                  <Link to="/menu" className="overlay-button">View Details</Link>
                </div>
              </div>
              <div className="featured-info">
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* Re-enabling the "View Full Menu" button */}
        <div className="view-all-container">
            <Link to="/menu" className="view-all-button">View Full Menu</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;