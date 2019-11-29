import "../styles/PopularSection.scss";
import React from "react";
import img1 from "../images/trending.jpg";

const PopularSection = () => {
  return (
    <div className="trending">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="trending__content">
              <h3 className="trending__content__title">
                Air Jordan Retro 10 Dark Shadown
              </h3>
              <h4>$249.99</h4>

              <a href="#" className="trending__add__cart">
                add to cart
              </a>
              <a href="#" className="trending__buy__now">
                buy it now
              </a>
              <em>
                Dream of speed and play fast in the Nike Mercurial Superfly 7
                Elite MDS FG. A streamlined upper combines with a Nike Aerotrak
                zone for high-speed play and supercharged traction.
              </em>
            </div>
          </div>
          <div className="col-md-6">
            <div className="trending__img__wrap">
              <img className="trending__img" src={img1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
