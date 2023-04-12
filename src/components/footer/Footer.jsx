import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <div className="footer__1">
                    <a href="#" className="footer__logo"><h4>In-Touch</h4></a>
                    <p>Get rid of the routine feel from your learning process and replace lame
            methods with fun and engaging ones.</p>
                </div>

                <div className="footer__2">
                    <h4>Permalinks</h4>
                    <ul className="permalinks">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/aboutpage" >About</Link>
                        </li>
                        <li>
                            <Link to="/coursespage">Courses</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer__3">
                    <h4>Primacy</h4>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms and Condition</a></li>
                    <li><a href="#">Refund Policy</a></li>
                </div>

                <div className="footer__4">
                    <h4>Contact Us</h4>
                    <div>
                        <p>+92-312-3456789</p>
                        <a href="contact">info@intouch.com</a>
                    </div>
                    <ul className="footer__socials">
                        <li><a href="#">
                            <i className='uil uil-facebook-f'></i>
                        </a></li>
                        <li><a href="#">
                            <i className='uil uil-instagram-alt'></i>
                        </a></li>
                        <li><a href="#">
                            <i className='uil uil-twitter'></i>
                        </a></li>
                        <li><a href="#">
                            <i className='uil uil-linkedin-alt'></i>
                        </a></li>
                    </ul>
                </div>


            </div>
            <div className="footer__copyright">
                <small>Copyright &copy; In-Touch</small>
            </div>
        </footer>
    )
}

export default Footer