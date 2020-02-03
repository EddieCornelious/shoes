import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Hero from "./Hero.js";

class HomeCarousel extends Component {
  render() {
    return (
      <Carousel
        transitionTime={1000}
        autoPlay={true}
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        interval={5000}
      >
        <div>
          <img src="/images/alfa-lifestyle-lady_2048x2048.jpeg" />
          <Hero />
        </div>
        <div>
          <img src="/images/alfa-lifestyle-lady_2048x2048.jpeg" />
          <Hero />
        </div>
        <div>
          <img src="/images/alfa-lifestyle-lady_2048x2048.jpeg" />
          <Hero />
        </div>
      </Carousel>
    );
  }
}

export default HomeCarousel;
