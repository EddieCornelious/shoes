import "../styles/App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Nav from "./Nav.js";
import NewsLetter from "./NewsLetter.js";
import Social from "./Social.js";
import Footer from "./Footer.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <NewsLetter />
        <Social />
        <Footer />
      </div>
    );
  }
}

export default App;
