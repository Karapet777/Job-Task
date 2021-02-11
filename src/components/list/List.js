import Button from "components/button/Button";
import React from "react";

import "./List.scss";
const List = ({ src, price, brand, click, iconBtn, textBtn }) => {
  return (
    <div className="list-container">
      <img className="list-container__img" src={src} alt="product img" />
      <div className="list-container__block-add-busket">
        <p className="list-container__block-add-busket__brand">{brand}</p>
        <p className="list-container__block-add-busket__price">{price}</p>
        <Button
          onClick={click}
          className="list-container__block-add-busket__btn"
        >
          {iconBtn} {textBtn}
        </Button>
      </div>
    </div>
  );
};

export default List;
