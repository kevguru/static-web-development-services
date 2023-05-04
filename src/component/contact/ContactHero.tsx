import React from 'react';
import '../../styles/contact/ContactHero.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import ImageLazy from '../Image';

const ContactHero = () => {
  return (
    <>
      <section className="contact-hero">
        <div className="row-1" data-aps="fade-right" data-aos-duration="1000">
          <div className="contact-hero__profile">
            <ImageLazy src="/contactimg/beverly.svg" alt="Beverly" className="contact-hero__profile-icon" />
          </div>
          <h2 className="contact-hero__title">Let's Stay Connected</h2>
          <span className="contact-hero__desc">We'd love to hear from you. Whether you have a question about our services, need help with a project.</span>
        </div>
        <div className="row-2" data-aos="fade-left" data-aos-duration="1400">
          <ImageLazy src="/contactimg/map.svg" alt="map contact" className="contact-hero__map" />
        </div>
      </section>
      <ListContact />
    </>
  );
};

const ListContact = () => {
  return (
    <div className="list-contact">
      <div className="social">
        <h3 className="social--title">Follow Us</h3>
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
      <div className="number">
        <FaPhoneAlt className="social__phone" />
        <span>+94 4444 5555 6</span>
      </div>
      <div className="location">
        <MdLocationOn className="social__location" />
        <span>JL. Puncak, Cikalong, Ciawi, Bogor, Jawa Barat, Kode Pos 10.</span>
      </div>
    </div>
  );
};

export default ContactHero;
