import "../styles/Nav.scss";
import React from "react";
import { ReactComponent as Logo } from "./bike.svg";
import Login from "./Login.js";
import SignUp from "./SignUp.js";

const NavTop = props => {
  return (
    <div className="navbar__top">
      <div className="navbar__top__icon">
        <Logo />
      </div>
      <div className="navbar__top__options">
        <ul>
          <li>
            <a
              onMouseEnter={() => props.onHoverChange(1)}
              className="mens__nav"
              href="#"
            >
              Mens
            </a>
          </li>
          <li>
            <a
              onMouseEnter={() => props.onHoverChange(2)}
              className="womens__nav"
              href="#"
            >
              Womens
            </a>
          </li>
          <li>
            <a onMouseEnter={() => props.onHoverChange(0)} href="#">
              Accessories
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar__top__user__options">
        <i className="fas fa-search" />
        <i className="far fa-user" />
        <i className="fas fa-shopping-cart" />
        <Login />
        <SignUp />
      </div>
    </div>
  );
};

const WomensContent = () => {
  return (
    <ul className="nav__hover__content__wrap">
      <li>
        <a>Sneakers</a>
      </li>
      <li>
        <a>Heels</a>
      </li>
      <li>
        <a>Flats</a>
      </li>
    </ul>
  );
};

const NavHover = props => {
  if (props.hoverState === 0) {
    return <div className="hide nav__hover__content" />;
  }
  if (props.hoverState === 1) {
    return (
      <div
        onMouseLeave={() => props.onHoverChange(0)}
        className="show nav__hover__content"
      >
        <WomensContent />
        <WomensContent />
        <WomensContent />
      </div>
    );
  }

  return (
    <div
      onMouseLeave={() => props.onHoverChange(0)}
      className="show nav__hover__content"
    >
      <WomensContent />
      <WomensContent />
    </div>
  );
};

class Nav extends React.Component {
  state = {
    hoverState: 0
  };
  changeHoverState(newState) {
    this.setState({
      hoverState: newState
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavTop onHoverChange={this.changeHoverState.bind(this)} />

        <NavHover
          onHoverChange={this.changeHoverState.bind(this)}
          hoverState={this.state.hoverState}
        />
      </React.Fragment>
    );
  }
}

export default Nav;
