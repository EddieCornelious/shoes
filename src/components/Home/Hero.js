import "../../styles/Hero.scss";
import React from "react";

const Hero = ({
  headerClass,
  anchorClass,
  paraClass,
  heroClass,
  spanClass
}) => {
  return (
    <div className={"hero__content " + heroClass}>
      <h1 className={headerClass || ""}>
        <span className={spanClass}>We have</span>{" "}
        <span className={spanClass}>the shoes</span>{" "}
        <span className={spanClass}>you need</span>
      </h1>
      <p className={paraClass || ""}>cleets, sneakers, loafers and more</p>
      <a className={anchorClass || ""} href="#">
        Shop
      </a>
    </div>
  );
};

export default Hero;
