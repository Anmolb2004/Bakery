import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

const testimonialsData = [
  {
    quote: "The best chocolate cake I have ever had! So fresh and delicious. Will definitely be ordering again for our next celebration.",
    name: "Anjali S.",
    stars: 5,
  },
  {
    quote: "Daisy & Dough is my go-to for custom cakes. They are not only beautiful but taste absolutely divine. Highly recommended!",
    name: "Rohan M.",
    stars: 5,
  },
  {
    quote: "Ordered a box of assorted cupcakes for a party and they were a huge hit! Every single one was perfect. The red velvet is a must-try.",
    name: "Priya K.",
    stars: 5,
  },
  {
    quote: "The attention to detail is just incredible. You can tell everything is baked with love. This is the best bakery in Chandigarh, hands down.",
    name: "Vikram G.",
    stars: 5,
  },
];


const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Sweet Words From Our Customers</h2>
        
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            }
          }}
          // The only change is this unique class name
          className="testimonial-swiper" 
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author-info">
                  <div className="rating">
                    {[...Array(testimonial.stars)].map((_, i) => <FaStar key={i} />)}
                  </div>
                  <h4 className="author-name">- {testimonial.name}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;