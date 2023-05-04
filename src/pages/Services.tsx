import React from 'react';
import Container from '../component/Container';
import ServiceHero from '../component/services/ServiceHero';
import ServiceSection1 from '../component/services/ServiceSection1';
import CountClient from '../component/services/CountClient';
import Projects from '../component/services/Projects';

const Services = () => {
  return (
    <Container>
      <ServiceHero />
      <ServiceSection1 />
      <CountClient />
      <Projects />
    </Container>
  );
};

export default Services;
