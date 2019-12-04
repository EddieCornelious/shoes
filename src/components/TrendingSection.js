import "../styles/TrendingSection.scss";
import React from "react";
import img1 from "../images/popular.jpg";

const Size = props => {
  return (
    <span
      className={Number(props.id) === Number(props.size) ? "active__size" : ""}
      id={props.id}
    >
      {props.id}
    </span>
  );
};

class TrendingSection extends React.Component {
  state = { size: 0, quantity: 1 };

  setSize(e) {
    if (e.target.tagName.toLowerCase() === "span") {
      this.setState({
        size: Number(e.target.id)
      });
    }
  }

  render() {
    return (
      <div className="trending">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="trending__img__wrap">
                <img className="trending__img" src={img1} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="trending__content">
                <h3 className="trending__content__title">
                  Nike Renew Run Women's Running Shoe
                </h3>
                <h4>$159.99</h4>
                <p onClick={this.setSize.bind(this)}>
                  SIZE:
                  <Size size={this.state.size} id="7" />
                  <Size size={this.state.size} id="8" />
                  <Size size={this.state.size} id="9" />
                  <Size size={this.state.size} id="10" />
                  <Size size={this.state.size} id="11" />
                  <Size size={this.state.size} id="12" />
                </p>

                <a href="#" className="trending__add__cart">
                  add to cart
                </a>
                <a href="#" className="trending__buy__now">
                  buy it now
                </a>
                <em>
                  Dream of speed and play fast in the Nike Mercurial Superfly 7
                  Elite MDS FG. A streamlined upper combines with a Nike
                  Aerotrak zone for high-speed play and supercharged traction.
                </em>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrendingSection;
