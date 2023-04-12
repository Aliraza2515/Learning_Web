import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './courses.css'
import Image1 from '../../assets/header1.png'


export const Courses = () => {

  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
      <div className="container courses__container">
        <div className="course__right">
          <div className="right__img">
            <img src={Image1} />
          </div>
        </div>

        <div className="course__left">
          <h1>Why You Choose Us</h1>
          <p>Check Our Popular Courses. We have all types of courses like E-commerce,
            Eduction, Learning Designing, Crypto and much more that anhance your knowledge.
            Click on Learn more to check our courses.
          </p>
          <NavLink
            exact
            to='/coursespage'
            activeClassName='active'
            className='btn btn-primary'
            onClick={() => handleLinkClick('/coursespage')}
          >
            Learn More
          </NavLink>
        </div>
      </div>
  )
}
export default Courses