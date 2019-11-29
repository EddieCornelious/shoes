import "../styles/App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Nav from "./Nav.js";
import Section1Hero from "./Section1Hero.js";
import Section2Hero from "./Section2Hero.js";
import Section3Hero from "./Section3Hero.js";
import TrendingSection from "./TrendingSection.js";
import PopularSection from "./PopularSection.js";
import NewsLetter from "./NewsLetter.js";
import Social from "./Social.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Section1Hero />
        <TrendingSection />
        <Section2Hero />
        <Section3Hero />
        <PopularSection />
        <NewsLetter />
        <Social />
      </div>
    );
  }
}

export default App;
