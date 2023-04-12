import React, { useState } from 'react'
import './header.css'
import { NavLink } from 'react-router-dom';
import Image2 from '../../assets/pic1.jpg'
import Image3 from '../../assets/pic2.jpg'
import Image4 from '../../assets/pic3.jpg'
import Image5 from '../../assets/pic4.jpg'
export const Header = () => {

  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <header>
      <div className="container header__container">
        <div className="header__details">
          <h1>Nourish your inner skills with Us.</h1>
          <p>Get rid of the routine feel from your learning process and replace lame
            methods with fun and engaging ones.
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
        <div className="header__imgs">
          <div className="img">
            <img src={Image2}/>
          </div>
          <div className="img__change">
          <div className="img">
            <img src={Image4}/>
          </div>
          <div className="img">
            <img src={Image3}/>
          </div>
          </div>
          <div className="img">
            <img src={Image5}/>
          </div>
        </div>
      </div>

    </header>
  )
}
export default Header