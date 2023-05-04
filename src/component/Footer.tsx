import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__body">
        <div className="footer__desc">
          <p>We are a team of passionate and skilled developers who specialize in creating stunning websites, landing pages, and mobile applications.</p>
          <p>@abun_yamin</p>
        </div>
        <div className="footer__aboutus">
          <h3 className="aboutus--title">About us</h3>
          <ul>
            <li>About us</li>
            <li>Portofolio</li>
            <li>Careers</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="footer__contactus">
          <h3 className="contactus--title">Contact us</h3>
          <div className="contactus--desc">
            <p>If you have any questions or would like to learn more about our web development services, please do not hesitate to get in touch with us.</p>
            <p>+6281314184314</p>
          </div>
        </div>
        <div className="footer__social">
          <button className="social--button">
            <FaFacebookF className="social--icon" />
          </button>
          <button className="social--button">
            <FaInstagram className="social--icon" />
          </button>
          <button className="social--button">
            <FaTwitter className="social--icon" />
          </button>
          <button className="social--button">
            <FaLinkedinIn className="social--icon" />
          </button>
        </div>
      </div>
      <div className="credits">
        <span>Copyright ® 2023 YaminDev. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
