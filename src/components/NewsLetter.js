import "../styles/NewsLetter.scss";
import React from "react";

const NewsLetter = () => {
  return (
    <div class="jumbotron jumbotron-fluid jumbotron--lg">
      <div class="container">
        <h1 class="display-4 center">sign up to our news letter</h1>
        <div class="input-group mb-3">
          <input
            type="email"
            class="form-control"
            placeholder="email"
            aria-label="email"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
