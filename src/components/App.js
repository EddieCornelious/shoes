import "../styles/App.scss";
import React from "react";
import Nav from "./Nav.js";
import NewsLetter from "./Home/NewsLetter.js";
import Footer from "./Footer.js";
import HomeCarousel from "./Home/Carousel.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <HomeCarousel />
        <NewsLetter />
        <Footer />
      </div>
    );
  }
}

export default App;
