import React from "react";

import Play from "assets/icon/play";

import "./SelectProduct.scss";

const SelectProduct = ({ title }) => {
  return (
    <div className="select-block">
      <p>{title}</p>
      <Play className="select-block__icon" width={12} />
      <div className="select-block__bar">
        <p>Sofas</p>
        <p>Tables</p>
        <p>Chairs</p>
        <p>Closets</p>
      </div>
    </div>
  );
};

export default SelectProduct;
