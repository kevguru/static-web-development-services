import React from "react";
import "../../styles/home/Hero.css";
import ImageLazy from "../Image";

const Hero = () => {
  return (
    <section className="hero">
      <div className="row-1">
        <div className="hero__text" data-aos="fade-right" data-aos-duration="1000">
          <h2>
          Expert <span>Web Development Services</span> for Stunning Websites, Landing Pages, and Mobile Apps
          </h2>
          <span>
          Kev Guru Media - We create amazing websites, landing pages, and mobile applications with our professional web development services using the latest technologies.
          </span>
          <div className="hero__buttons">
            <button className="btn__contact">Contact us</button>
            <button className="btn__view">View more</button>
          </div>
        </div>
      </div>
      <div className="row-2">
        <ImageLazy src="/home/bill-sitting-using-laptop.png" alt="Bill sitting using laptop" className="hero__image--main" />
        <ImageLazy src="/home/cuboid.png" alt="cuboid" className="image--cuboid" />
        <ImageLazy src="/home/big-plant.png" alt="Big Plant" className="image--bplant" />
        <ImageLazy src="/home/succlent-angle.png" alt="Succlent Angle" className="image--succlent" />
      </div>
    </section>
  );
};

export default Hero;
