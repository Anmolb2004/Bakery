import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';

// Make sure you have these images in your src/assets folder
// I'm assuming you have cake1.png, cake2.png, cake3.png
import cake1 from '../assets/cake1.png';
import cake2 from '../assets/cake2.png';
import cake3 from '../assets/cake3.png';

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
    name: 'Fruit Cake', 
    image: cake1
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
        {/* <div className="view-all-container">
            <Link to="/menu" className="view-all-button">View Full Menu</Link>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedProducts;