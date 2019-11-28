import "../styles/App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Nav from "./Nav.js";
import Section1Hero from "./Section1Hero.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Section1Hero />
      </div>
    );
  }
}

export default App;
