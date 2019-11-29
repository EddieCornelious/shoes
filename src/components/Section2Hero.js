import React from "react";
import "../styles/App.scss";
import img1 from "../images/soccer.jpg";

const Section2Hero = () => {
  return (
    <div className="section__hero">
      <div className="section__hero__img__container">
        <h2>look great</h2>
        <img className="no__margin section__hero--1" src={img1} />
      </div>
    </div>
  );
};

export default Section2Hero;
