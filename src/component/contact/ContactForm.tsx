import React from 'react';
import '../../styles/contact/ContactForm.css'

const ContactForm = () => {
  return (
    <section className="contact-form">
      <h2 className="contact-form__title">Get in Touch</h2>
      <span className="contact-form__desc">Fill out the form below and one of our representatives will get back to you as soon as possible.</span>
      <div className="contact-form__input">
        <div className="contact-form--firstname">
          <label htmlFor="firstname">First Name</label>
          <input type="text" />
        </div>
        <div className="contact-form--lastname">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" />
        </div>
        <div className="contact-form--email">
          <label htmlFor="email">Email Address</label>
          <input type="text" />
        </div>
        <div className="contact-form--message">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} cols={50}></textarea>
        </div>
        <button type="submit" className="contact-form--submit">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default ContactForm;
