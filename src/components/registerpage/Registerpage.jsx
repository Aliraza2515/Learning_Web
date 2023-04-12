import React from 'react'
import { useState } from 'react'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Registerpage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };
  return (
    < >
      <Navbar />
      <section>
        <div className="container login__container">
          <h2>Register Your Account</h2>
          <form className='login__form' onSubmit={handleSubmit}>
            <div className="login__info">
              <label>
                Name:
                <input type="text" value={name} placeholder="Enter Your Full Name" onChange={handleNameChange} />
              </label>
              <label>
                Email:
                <input type="email" value={email} placeholder="Enter Your Email" onChange={handleEmailChange} />
              </label>
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
            </div>
            <button type="submit" className='btn btn-primary'>Register</button>
          </form>
          <span>
            <small>Already Sign Up!</small> <Link to="/login">LogIn</Link>
          </span>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Registerpage