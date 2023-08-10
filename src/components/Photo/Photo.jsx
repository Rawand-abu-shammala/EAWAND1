import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Reviews.css';
import { reviews } from '../../mock/Navbardata';
import { FaStar } from 'react-icons/fa';


function Reviews() {
const carouselRef = useRef();
const [width, setWidth] = useState(0);

useEffect(() => {
setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
}, []);

const dragTransition = {
bounceStiffness: 600,
bounceDamping: 10,
type: 'spring',
duration: 0.5 
};

return (
<section id='testimonials'>
  <div className='section-title'>
    <h2 className='title'>Reviews</h2>
    <p className='subtitle'>words from our food lovers</p>
  </div>

  <div className='testimonials-heading'>
    <div
      className='carousel-container'
      ref={carouselRef}
      drag='x'
      dragElastic={0.8}
      dragConstraints={{
        left: -width,
        right: 0
      }}
    >
      <div
        className='product-carousel'
        style={{ display: 'flex' }}
        drag='x'
        dragConstraints={{
          left: -width,
          right: 0
        }}
        dragElastic={0.8}
        dragMomentum={false}
        dragTransition={dragTransition} // استخدم خوارزمية التحويل هنا
      >
        {reviews.map((review, index) => (
          <div
            className='testimonial-box'
            key={index}
            style={{ flex: '0 0 33.33%' }}
          >
            <div className='box-top'>
              <div className='profile'>
                <div className='profile-img'>
                  <img src={review.imageSrc} alt='' />
                </div>
              </div>
              <div className="y">
              <div className='name-user'>
                <strong>{review.name}</strong>
              </div>
              <div className='reviews'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              </div>

              </div>
            </div>
            <div className='client-comment'>
              <p>{review.reviewText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
);
}

export default Reviews;



