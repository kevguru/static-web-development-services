import React from 'react';
import ImageLazy from '../Image';
import '../../styles/services/ServiceSection1.css';

const ServiceSection1 = () => {
  return (
    <section className="service-section-1">
      <div className="row-1">
        <h2 className="service-section-1__title">
          <span>Let's Discuss</span> Your Project Today
        </h2>
        <p>
          We are dedicated to providing top-quality web development services to businesses of all sizes. Whether you need a new website, mobile application, or virtual reality experience, our team has the expertise to deliver customized
          solutions that meet your unique needs.
        </p>
        <p>
          Contact us today to schedule a consultation and let's discuss how we can help you achieve your online goals. Our friendly team is always ready to answer your questions and provide you with the information you need to make an
          informed decision. Don't wait, let's get started on your project today!.
        </p>

        <button className="service-section-1__button">Contact us</button>
      </div>
      <div className="row-2">
        <ImageLazy src="/services/service-section-1.png" alt="Service Section 1" className="service-section-1__img" />
      </div>
    </section>
  );
};

export default ServiceSection1;
