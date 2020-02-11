import "../../styles/Section1.scss";
import React from "react";

const LeftContentDefault = () => {
  return <div className="left__content">SHOP Bikes</div>;
};

const RightContentDefault = () => {
  return <div className="right__content">SHOP Boards</div>;
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
