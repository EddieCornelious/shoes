import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Hero from "./Hero.js";

class HomeCarousel extends Component {
  render() {
    return (
      <div className="container-fluid px-5 mt-5">
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
      </div>
    );
  }
}

export default HomeCarousel;
