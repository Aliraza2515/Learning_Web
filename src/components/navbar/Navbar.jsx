import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

const NavigationMenu = () => {
  const [menuBtn, setMenuBtn] = useState(null);
  const [closeBtn, setCloseBtn] = useState(null);

  useEffect(() => {
    setMenuBtn(document.querySelector('#open-menu-btn'));
    setCloseBtn(document.querySelector('#close-menu-btn'));
  }, []);

  const openNav = () => {
    document.querySelector('.nav__menu').style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
  };

  const closeNav = () => {
    document.querySelector('.nav__menu').style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
  };

  return { openNav, closeNav };
};

const Navbar = () => {
  const { openNav, closeNav } = NavigationMenu();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 1);
    });
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <nav className={isScrolled ? 'window-scroll' : ''}>
      <div className='container nav__container'>
        <div className="logo">
         <span className="nav__icon"><i class="uil uil-browser"></i></span>
        <Link to='/'>
          <h4 className='text-muted'>In-Touch</h4>
        </Link>
        </div>
        <ul className={`nav__menu ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <NavLink
              exact
              to='/'
              activeClassName='active'
              onClick={() => handleLinkClick('/')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/aboutpage'
              activeClassName='active'
              onClick={() => handleLinkClick('/aboutpage')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/coursespage'
              activeClassName='active'
              onClick={() => handleLinkClick('/coursespage')}
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/contact'
              activeClassName='active'
              onClick={() => handleLinkClick('/contact')}
            >
              Contact
            </NavLink>
          </li>
          </ul>
            <button className='btn btn-primary'>
            <NavLink
              exact
              to='/registerpage'
              activeClassName='active'
              onClick={() => handleLinkClick('/registerpage')}
            >
              Sign Up
            </NavLink>
            </button>
        <div className='menu-btn'>
        <button id='open-menu-btn'  onClick={openNav}>
          <i className='uil uil-bars'></i>
        </button>
        <button id='close-menu-btn' onClick={closeNav}>
          <i className='uil uil-multiply'></i>
        </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
