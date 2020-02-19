import React, { Component } from "react";
import "../../styles/TrendingSection.scss";

const TrendingItem = ({ classId }) => {
  const url = [
    "Unknown-2.jpeg",
    "Unknown-3.jpeg",
    "Unknown.png",
    "Unknown-1.jpeg",
    "Unknown-4.jpeg",
    "Unknown-8.jpeg",
    "ADYSB00019_MUL_FRT4_1800-2400_large.jpeg",
    "Untitled-112_copy_copy_copy_large.jpeg"
  ];
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 p-0">
      <div className="trending__item">
        <div className="trending__item__top">
          <img src={"images/" + url[classId]} />
        </div>
      </div>
    </div>
  );
};

class TrendingSection extends React.Component {
  componentDidMount() {}

  renderRow(row) {
    const items = [];
    for (let i = 0; i < 8; i++) {
      items.push(<TrendingItem row={row * i} classId={i} />);
    }

    return items;
  }

  render() {
    return (
      <div className="trending__section container-fluid px-5 pt-5">
        <h2 className="trending__header">trending items</h2>
        <div className="container-fluid">
          <div className="row">{this.renderRow()}</div>
        </div>

        <div className="spacer mb-5" />
      </div>
    );
  }
}

export default TrendingSection;
