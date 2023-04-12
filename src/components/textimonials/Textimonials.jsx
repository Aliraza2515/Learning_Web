import React from 'react'
import './textimonials.css'
import Textimonialsdata from './Textimonialsdata';
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Textimonials = (props) => {
  return (
    <section id='textimonials'>
      <h2>Students Reviews</h2>
      <Swiper modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container textimonials__container">
        {
          Textimonialsdata.map((props, index) => {
            return (
              <SwiperSlide key={index} className="textimonials">
                <div className="clients">
                  <img src={props.Image} alt={`Client ${index + 1}`} />
                </div>
                <h5 className="client__name">{props.Name}</h5>
                <small className="review">{props.Review}</small>
                <div className="rating">
                  <span role="img" aria-label="star" className="star">&#11088;</span>
                  <span role="img" aria-label="star" className="star">&#11088;</span>
                  <span role="img" aria-label="star" className="star">&#11088;</span>
                  <span role="img" aria-label="star" className="star">&#11088;</span>
                  <span role="img" aria-label="star" className="star">&#11088;</span>
                </div>
              </SwiperSlide>
            );
          })
        }

      </Swiper>
    </section>
  )
}

export default Textimonials
