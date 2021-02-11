import React from "react";

import Button from "components/button/Button";

import "./Home.scss";

const Home = () => {
  return (
    <div className="app-home-container">
      <div className="app-home-container__context">
        <p className="app-home-container__context__text">
          Create your comfort zone.
        </p>
        <Button className="app-home-container__context__btn">Shop now</Button>
      </div>
    </div>
  );
};

export default Home;
