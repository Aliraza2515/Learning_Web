import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import './login.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Loginpages = () => {
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  }
  return (
    < >
        <Navbar/>
        <section>
        <div className="container login__container">
        <h2>Get In Touch</h2>
    <form className='login__form' onSubmit={handleSubmit}>
        <div className="login__info">
      <label>
        Email:
        <input type="email" value={email} placeholder="Enter Your Email" onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <div style={{ position: 'relative' }}>
              <input
                placeholder='Password'
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                style={{
                  position: 'absolute',
                  right: 10,
                  top: '30%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 25,
                  color: 'var(--color-dark)',
                }}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
              </div>
      </label>
      </div>
      <button type="submit" className='btn btn-primary'>Log In</button>
    </form>
    <span>
      <small>New User? Sign Up</small> <Link to="/registerpage">Register</Link>
      </span>
    </div>
    </section>
        <Footer/>
    </>
  )
}

export default Loginpages