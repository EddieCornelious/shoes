import "../../styles/Section1.scss";
import React from "react";

const LeftContentDefault = () => {
  return (
    <div className="left__content">
      <h3>the end of season sale is here.</h3>
      <p>Up to 50% off</p>
      <a href="#">shop bikes</a>
    </div>
  );
};

const RightContentDefault = () => {
  return (
    <div className="right__content">
      <h3>limited offers on boards</h3>
      <p>Up to 50% off</p>
      <a href="#">shop boards</a>
    </div>
  );
};

const Section1 = ({ LeftContent, src1, src2, RightContent }) => {
  return (
    <div className="container-fluid px-5 mt-5">
      <div className="section1">
        <div className=" section1__left pr-4">
          {!LeftContent ? <LeftContentDefault /> : LeftContent}

          <img
            src={src1 || "/images/alfa-lifestyle-lady-sitting_2048x2048.jpeg"}
          />
        </div>
        <div className="section1__right pl-4">
          {!RightContent ? <RightContentDefault /> : RightContent}

          <img src={src2 || "/images/alfa-lifestyle_2048x2048.jpeg"} />
        </div>
      </div>
    </div>
  );
};

export default Section1;
