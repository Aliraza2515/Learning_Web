import React from 'react'
import './contact.css'
import Contact1 from '../../assets/contact.png'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sgwl54s', 'template_xa3gdrl', form.current, 'Hwf9pqJYeTJcetnV1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

    return (
        <section className="contact">
            <div className="container contact__container">
                <aside className="contact__aside">
                    <div className="aside__img">
                        <img src={Contact1} alt="contact" />
                    </div>
                    <h2>Contact Us</h2>
                    <ul className='contact__details'>
                        <li>
                            <i className="uil uil-phone-times"></i>
                            <h5>
                                +9234567890980
                            </h5>
                        </li>
                        <li>
                            <i className="uil uil-envelope"></i>
                            <h5>
                                info@intouch.com
                            </h5>
                        </li>
                        <li>
                            <i className="uil uil-location-point"></i>
                            <h5>
                                Lahore, Pakistan
                            </h5>
                        </li>
                    </ul>
                    <div className="contact__soicals">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer"> <i className='uil uil-facebook-f'></i></a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"> <i className='uil uil-instagram-alt'></i></a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer"> <i className='uil uil-linkedin-alt'></i></a>
                    </div>
                </aside>

                <form className='contact__form' ref={form} onSubmit={sendEmail}>
                    <div className="form__name">
                    <input type="text" name='First Name' placeholder='Enter Your First Name' required />
                    <input type="text" name='Last Name' placeholder='Enter Your last Name' required />
                    </div>
                    <input type="email" name='email' placeholder='Enter Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message'></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
