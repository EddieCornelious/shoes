import "../styles/Section3Hero.scss";
import React from "react";
import img1 from "../images/become_great.jpg";

const Section3Hero = () => {
  return (
    <div className="section__hero">
      <div className="section__hero__img__container">
        <h2>become great</h2>
        <a href="#">shop now</a>
        <div className="hero__overlay">&nbsp;</div>
        <img className=" no__margin section__hero--1" src={img1} />
      </div>
    </div>
  );
};

export default Section3Hero;
