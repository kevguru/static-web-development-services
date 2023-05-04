import React from "react";
import Container from "../component/Container";
import Hero from "../component/home/Hero";
import Offer from "../component/home/Offer";
import HomeBodyText from "../component/home/HomeBodyText";
import HomeSection1 from "../component/home/HomeSection1";
import HomeSection2 from "../component/home/HomeSection2";
import HomeSection3 from "../component/home/HomeSection3";
import Card from "../component/home/Card";
import Company from "../component/home/Company";
import "../styles/home/HomeSection.css";
import "../styles/home/HomeSectionText.css";

const Home = () => {
  return (
    <>
      <Container>
        <Hero />
        <Offer />
        <HomeBodyText />
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
        <Card />
        <Company />
      </Container>
    </>
  );
};

export default Home;
