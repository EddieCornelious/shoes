import React, { Component } from "react";
import "../../styles/TrendingSection.scss";

const TrendingItem = ({ classId }) => {
  return (
    <div className="col-md-3 p-0">
      <div className={"trending__item " + { classId }}>HI</div>
    </div>
  );
};

class TrendingSection extends React.Component {
  componentDidMount() {}

  renderRow() {
    const items = [];

    for (let i = 0; i < 4; i++) {
      items.push(<TrendingItem classId={i} />);
    }
    return items;
  }

  render() {
    return (
      <div className="trending__section container-fluid px-5 pt-5">
        <div className="row">{this.renderRow()}</div>
        <div className="row">{this.renderRow()}</div>
      </div>
    );
  }
}

export default TrendingSection;
