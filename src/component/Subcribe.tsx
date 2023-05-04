import React from 'react';
import '../styles/Subcribe.css';

const Subcribe = () => {
  return (
    <section className="subcribe">
      <div className="subcribe__body">
        <h3 className="subcribe__text">Stay Connected with the Latest Updates and Offers Subscribe to our Newsletter!</h3>
        <div className="subcribe__form">
          <input type="text" className="subcribe--input" placeholder="Enter your email" />
          <button className="subcribe--button">SUBCRIBE</button>
        </div>
      </div>
    </section>
  );
};

export default Subcribe;
