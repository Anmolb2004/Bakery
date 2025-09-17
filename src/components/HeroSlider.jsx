import React from 'react';
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Autoplay, EffectFade, Navigation } from 'swiper/modules';

// Your custom styles for the slider
import './HeroSlider.css';

// The images you want to use
import slideCakes from '../assets/hero-carousel-cakes.jpg';
import slideCookies from '../assets/hero-carousel-cookies.jpg';
import slideBread from '../assets/hero-carousel-bread.jpg';

const HeroSlider = () => {
  return (
    <section className="hero-slider">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay, Navigation]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="mySwiper"
      >
        <SwiperSlide className="slide-1">
          <div className="slide-content text-left">
            <img className="slide-bg-image" src={slideCakes} alt="Artisan celebration cakes" />
            <div className="slide-text-container">
              <h1>Slices of Joy, Artfully Crafted</h1>
              <p>Every celebration deserves a masterpiece. Discover cakes that taste as incredible as they look.</p>
              <Link to="/menu" className="order-now-btn">Explore Cakes</Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content text-left">
            <img className="slide-bg-image" src={slideCookies} alt="Gourmet cookies" />
            <div className="slide-text-container">
              <h1>A Little Bite of Happiness</h1>
              <p>From classic chocolate chip to gourmet creations, find your new favorite cookie today.</p>
              <Link to="/menu" className="order-now-btn">See Cookies</Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content text-center">
            <img className="slide-bg-image" src={slideBread} alt="Freshly baked artisan breads" />
            <div className="slide-text-container">
              <h1>Baked Fresh, Daily</h1>
              <p>The perfect start to your day begins with our artisan breads, made with passion.</p>
              <Link to="/menu" className="order-now-btn">View Breads</Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSlider;