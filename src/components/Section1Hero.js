import "../styles/Section1Hero.scss";
import React from "react";
import img1 from "../images/woman_posing.jpg";

const Section1Hero = () => {
  return (
    <div className="section__hero">
      <div className="section__hero__img__container">
        <h2>feel great</h2>
        <div className="hero__overlay">&nbsp;</div>
        <img className="section__hero--1" src={img1} />
      </div>
    </div>
  );
};

export default Section1Hero;
