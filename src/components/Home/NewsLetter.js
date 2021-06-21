import "../../styles/NewsLetter.scss";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="jumbotron jumbotron--lg mb-0 mt-5">
      <div className="container">
        <div className="row">
          <h1 className="display-4 center">sign up to our news letter</h1>
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="email"
              aria-label="email"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
