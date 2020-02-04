import "../styles/App.scss";
import React from "react";
import Nav from "./Nav.js";
import NewsLetter from "./Home/NewsLetter.js";
import Footer from "./Footer.js";
import HomeCarousel from "./Home/Carousel.js";
import Section1 from "./Home/Section1.js";
import TrendingSection from "./Home/TrendingSection.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <HomeCarousel />
        <Section1 />
        <TrendingSection />
        <NewsLetter />
        <Footer />
      </div>
    );
  }
}

export default App;
