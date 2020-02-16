import "../styles/App.scss";
import React from "react";
import Nav from "./Nav.js";
import NewsLetter from "./Home/NewsLetter.js";
import Footer from "./Footer.js";
import HomeCarousel from "./Home/Carousel.js";
import Section1 from "./Home/Section1.js";
import TrendingSection from "./Home/TrendingSection.js";
import axios from "axios";
import API_ROOT from "./config.js";

class App extends React.Component {
  componentDidMount() {
    axios({
      method: "post",
      url: API_ROOT + "/users/login",
      data: { userName: "ed", password: "12345678" },
      headers: {
        "content-type": "application/json"
      }
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Nav />
        <HomeCarousel />
        <Section1
          src1="/images/paul-green-gOHfFgwyDNM-unsplash.jpg"
          src2="/images/home_hero7.jpg"
        />
        <TrendingSection />
        <Section1
          src1="/images/dmitrii-vaccinium-9qsK2QHidmg-unsplash.jpg"
          src2="/images/home_hero8.jpg"
        />
        <NewsLetter />
        <Footer />
      </div>
    );
  }
}

export default App;
