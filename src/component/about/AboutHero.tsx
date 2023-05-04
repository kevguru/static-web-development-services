import { useEffect, useState } from 'react';
import Image from '../Image';
import '../../styles/about/AboutHero.css';

const AboutHero = () => {
  const [heroItems, setHeroItems] = useState<NodeListOf<HTMLElement>>();

  useEffect(() => {
    const items: NodeListOf<HTMLElement> = document.querySelectorAll('.hero__item');

    setHeroItems(items);
  }, []);

  // const heroItems: NodeListOf<HTMLDivElement> = document.querySelectorAll('.about-hero');

  useEffect(() => {
    if (heroItems) {
      heroItems.forEach((element: HTMLElement, index: number) => {
        // element.dataset.aos = 'zoom-in';
        element.dataset.aosDuration = String(400 + index * 800);
      });
    }
  }, [heroItems]);

  return (
    <section className="about-hero">
      <div className="about-hero__image1 hero__item" data-aos="zoom-in">
        <Image src="/about/hero-about-1.jpg" alt="About Hero" className="about-hero__image" />
      </div>
      <div className="about-hero__image2 hero__item" data-aos="zoom-in">
        <Image src="/about/hero-about-2.jpg" alt="About Hero" className="about-hero__image" />
      </div>
      <div className="about-hero__image3 hero__item" data-aos="zoom-in">
        <Image src="/about/hero-about-3.jpg" alt="About Hero" className="about-hero__image" />
      </div>
      <div className="aboutus hero__item" data-aos="zoom-in">
        <h2 className="aboutus__title">About us</h2>
        <h3 className="aboutus__subtitle">Passionate Team of Web Developers.</h3>
        <span className="aboutus__content">At YaminDev, we are a team of passionate web developers who are dedicated to delivering high-quality web development services to our clients.</span>
      </div>
      <div className="about-hero__image4 hero__item" data-aos="zoom-in">
        <Image src="/about/hero-about-4.jpg" alt="About Hero" className="about-hero__image" />
      </div>
    </section>
  );
};

export default AboutHero;
