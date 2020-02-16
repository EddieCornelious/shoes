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
            <img src="/images/home_hero1.jpg" />
            <Hero />
          </div>
          <div>
            <img src="/images/home_hero2.jpg" />
          </div>
          <div>
            <img src="/images/home_hero3.jpg" />
            <Hero
              anchorClass={"alt"}
              paraClass={"black"}
              panClass={"in-line"}
              heroClass={"right__hero"}
              alt={true}
            />
          </div>
          <div>
            <img src="/images/home_hero4.jpg" />
            <Hero />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default HomeCarousel;
