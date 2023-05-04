import React from 'react';
import Container from '../component/Container';
import ContactHero from '../component/contact/ContactHero';
import ContactForm from '../component/contact/ContactForm';

const Contact = () => {
  return (
    <Container>
      <ContactHero />
      <ContactForm />
    </Container>
  );
};

export default Contact;
