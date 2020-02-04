import React, { Component } from "react";
import "../../styles/TrendingSection.scss";

const TrendingItem = ({ classId }) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 p-0">
      <div className="trending__item">
        <div className="trending__item__top">*nbsp;</div>

        <div className="trending__item__bottom">&nbsp;</div>
      </div>
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
        <h2 className="trending__header">trending items</h2>
        <div className="container-fluid">
          <div className="row">{this.renderRow()}</div>
        </div>
        <div className="container-fluid">
          <div className="row">{this.renderRow()}</div>
        </div>
        <div className="spacer mb-5" />
      </div>
    );
  }
}

export default TrendingSection;
