import "../styles/Nav.scss";
import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import Slider from "./Slider.js";

const NavTop = () => {
  return (
    <div className="navbar__top">
      <div className="navbar__top__icon">
        <Logo />
      </div>
      <div className="navbar__top__options">
        <ul>
          <li>
            <a href="#">Mens</a>
          </li>
          <li>
            <a href="#">Womens</a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
        </ul>
      </div>
      <div className="navbar__top__user__options">
        <i className="fas fa-search" />
        <i className="far fa-user" />
        <i className="fas fa-shopping-cart" />
      </div>
    </div>
  );
};

const NavBottom = () => {
  return (
    <div className="navbar__bottom">
      <Slider />
    </div>
  );
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1>
          <span>We have</span> <span>the shoes</span> <span>you need</span>
        </h1>
        <p>cleets, sneakers, loafers and more</p>
        <a href="#">Shop</a>
      </div>
    </div>
  );
};
const Nav = () => {
  return (
    <React.Fragment>
      <NavTop />
      <NavBottom />
      <Hero />
    </React.Fragment>
  );
};

export default Nav;
