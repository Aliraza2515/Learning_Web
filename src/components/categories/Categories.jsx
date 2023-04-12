import React, { useState } from 'react'
import './categories.css'
import { Link, NavLink } from 'react-router-dom';
const Categories = () => {

    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };
    return (
        <section className='categories'>
            <div className="container categories__container">
                <div className="category__left">
                    <h1 className='text-muted'>Categories</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident cupiditate quaerat corporis et eligendi voluptates.

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

                <div className="category__right">
                    <article className="category">
                        <span className="category__icon">
                            <i className='uil uil-bitcoin-circle'></i>
                        </span>
                        <h5>Crypto Currency</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, placeat.</p>
                    </article>

                    <article className="category">
                        <span className="category__icon">
                            <i className='uil uil-palette'></i>
                        </span>
                        <h5>Graphic Design</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, placeat.</p>
                    </article>

                    <article className="category">
                        <span className="category__icon">
                            <i className='uil uil-usd-circle'></i>
                        </span>
                        <h5>Finance</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, placeat.</p>
                    </article>

                    <article className="category">
                        <span className="category__icon">
                            <i className='uil uil-megaphone'></i>
                        </span>
                        <h5>Marketing</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, placeat.</p>
                    </article>

                    <article className="category">
                        <span className="category__icon">
                            <i className='uil uil-music'></i>
                        </span>
                        <h5>Music</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, placeat.</p>
                    </article>

                    <article className="category">
                        <span className="category__icon">
                            <i className='uil uil-puzzle-piece'></i>
                        </span>
                        <h5>Business</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, placeat.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Categories