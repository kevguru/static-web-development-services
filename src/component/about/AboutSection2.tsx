import React from 'react';
import '../../styles/about/AboutSection2.css';
import { RiLayout4Line } from 'react-icons/ri'
import { CiMobile3 } from 'react-icons/ci'
import { BsRocket, BsHeadsetVr } from 'react-icons/bs'

const AboutSection2 = () => {

  const offers = [
    {title: "Web Application", icon: <RiLayout4Line className='about__offer-icon' />},
    {title: "Mobile Applications", icon: <CiMobile3 className='about__offer-icon' />},
    {title: "SEO", icon: <BsRocket className='about__offer-icon' />},
    {title: "AR/VR", icon: <BsHeadsetVr className='about__offer-icon' />},
  ]

  return (
    <section className="about-section-2">
      <div className="row-1" data-aos="fade-up" data-aos-duration="2000">
        <span className='line'></span>
        <h2 className="about-section-2__title">Get In Touch With Us</h2>
        <span className="about-section-2__content">We would love to hear from you! If you have any questions, comments, or feedback about our services, please don't hesitate to contact us.</span>
        <button className="about-section-2__button">Contact Us</button>
      </div>
      <div className="row-2">
      <div className="about__offer-list" data-aos="fade-left" data-aos-duration="2400">
        {offers.map((item, index) => 
        <div className="about__offer-item" key={index}><div className="about__offer-bg">{item.icon}</div><span>{item.title}</span></div>
        )}
      </div>
      </div>
    </section>
  );
};

export default AboutSection2;
