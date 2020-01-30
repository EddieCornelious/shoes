import "../styles/Social.scss";
import React from "react";

const Social = () => {
  return (
    <React.Fragment>
      <div className="container-fluid no__padding">
        <div className="row">
          <div className="social__wrap twitter">
            <div className="social__content">
              <i class="fab fa-twitter" />
              twitter
            </div>
            <div className="social__overlay twitter--overlay" />
          </div>

          <div className="social__wrap facebook">
            <div className="social__content">
              <i className="fab fa-facebook-f" />
              facebook
            </div>
            <div className="social__overlay facebook--overlay" />
          </div>

          <div className="social__wrap instagram">
            <div className="social__content">
              <i class="fab fa-instagram" />
              instagram
            </div>
            <div className="social__overlay instagram--overlay" />
          </div>

          <div className="social__wrap youtube">
            <div className="social__content">
              <i class="fab fa-youtube" />
              youtube
            </div>
            <div className="social__overlay youtube--overlay" />
          </div>

          <div className="social__wrap map">
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
