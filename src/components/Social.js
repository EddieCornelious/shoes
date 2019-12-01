import "../styles/Social.scss";
import React from "react";
import fb from "../images/facebook.jpg";
import insta from "../images/instagram.jpg";
import twitter from "../images/twitter.jpg";
import map from "../images/map.jpg";
import yt from "../images/youtube.jpg";

const Social = () => {
  return (
    <React.Fragment>
      <div className="container-fluid no__padding">
        <div className="row">
          <div
            style={{ backgroundImage: `url(${twitter})` }}
            className="social__wrap"
          >
            <div className="social__content">
              <i class="fab fa-twitter" />
              twitter
            </div>
            <div className="social__overlay twitter--overlay" />
          </div>

          <div
            style={{ backgroundImage: `url(${fb})` }}
            className="social__wrap"
          >
            <div className="social__content">
              <i className="fab fa-facebook-f" />
              facebook
            </div>
            <div className="social__overlay facebook--overlay" />
          </div>

          <div
            style={{ backgroundImage: `url(${insta})` }}
            className="social__wrap"
          >
            <div className="social__content">
              <i class="fab fa-instagram" />
              instagram
            </div>
            <div className="social__overlay instagram--overlay" />
          </div>

          <div
            style={{ backgroundImage: `url(${yt})` }}
            className="social__wrap"
          >
            <div className="social__content">
              <i class="fab fa-youtube" />
              youtube
            </div>
            <div className="social__overlay youtube--overlay" />
          </div>

          <div
            style={{ backgroundImage: `url(${map})` }}
            className="social__wrap"
          >
            <div className="social__content">
              <i class="far fa-map" />
              find us
            </div>
            <div className="social__overlay map--overlay" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Social;
