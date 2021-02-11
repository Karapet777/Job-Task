import Button from "components/button/Button";
import React from "react";
import Arrow from "components/arrow/arrow";
import "./Item.scss";

const Item = ({ src, nameDecor }) => {
  return (
    <>
      <img className="img" src={src} alt="decor img" />

      <Button className="decor-btn">{nameDecor}</Button>
      <Arrow />
    </>
  );
};

export default Item;
