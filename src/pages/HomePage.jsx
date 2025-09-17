import React from 'react';
// import Hero from '../components/Hero'; // We don't need this anymore
import HeroSlider from '../components/HeroSlider'; // Import the new HeroSlider
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <>
      <HeroSlider /> {/* Use the new HeroSlider here */}
      <About />
      <WhyChooseUs />
      <FeaturedProducts />
      <Testimonials />
    </>
  );
};

export default HomePage;