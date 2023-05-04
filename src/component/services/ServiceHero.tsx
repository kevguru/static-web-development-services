import React from 'react';
import '../../styles/services/ServiceHero.css';
import { RiLayout4Line } from 'react-icons/ri';
import { CiMobile3 } from 'react-icons/ci';
import { BsRocket, BsHeadsetVr } from 'react-icons/bs';
import { FcServices } from 'react-icons/fc';

const ServiceHero = () => {
  return (
    <section className="service-hero">
      <div className="service-hero__text">
        <div className="service-hero--icon-bg">
          <FcServices className="service-hero--icon" />
        </div>
        <h2 className="service-hero--title" data-aos="zoom-in">
          Our <span>Services</span>
        </h2>
        <span className="service-hero--content" data-aos="zoom-in" data-aos-delay="400">
        Welcome to our Services page! We offer a wide range of web development services that are tailored to meet your unique business needs.
        </span>
      </div>
      <ServiceList />
    </section>
  );
};

const ServiceList = () => {
  const services = [
    { title: 'Web Application', icon: <RiLayout4Line className="service-item--icon" /> },
    { title: 'Mobile Applications', icon: <CiMobile3 className="service-item--icon" /> },
    { title: 'SEO', icon: <BsRocket className="service-item--icon" /> },
    { title: 'AR/VR', icon: <BsHeadsetVr className="service-item--icon" /> },
  ];
  return (
    <div className="service-list" data-aos="zoom-in" data-aos-duration="1000">
      {services.map((item, index) => (
        <div className="service-item" key={index}>
          <div className="service-item--bg">{item.icon}</div>
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default ServiceHero;
