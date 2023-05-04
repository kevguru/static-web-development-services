import React from 'react';
import Container from '../component/Container';
import AboutHero from '../component/about/AboutHero';
import AboutSection1 from '../component/about/AboutSection1';
import AboutSection2 from '../component/about/AboutSection2';
import Team from '../component/about/Team';

const About = () => {
  return (
    <Container>
      <AboutHero />
      <AboutSection1 />
      <AboutSection2 />
      <Team />
    </Container>
  );
};

export default About;
