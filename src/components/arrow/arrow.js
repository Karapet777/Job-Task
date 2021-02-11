import React from "react";

import "./Arrow.scss";

const Arrow = (classNameArrow) => {
  return (
    <div className={`block-arrow  ${classNameArrow}`}>
      <div className="block-arrow__line"></div>
      <div className="block-arrow__top"></div>
      <div className="block-arrow__botoom"></div>
    </div>
  );
};

export default Arrow;
