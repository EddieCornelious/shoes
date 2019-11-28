import React from "react";
import Slider from "react-slick";
import "../styles/Slider.scss";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5500,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <div className="slide__content">
            <p>LMAOOO I think I need a dog lol</p>
          </div>
        </div>

        <div>
          <div className="slide__content">
            <p>LMAOOO I think I need a dog lol</p>
          </div>
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
