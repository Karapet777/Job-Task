import React from "react";

import cardImg from "assets/img/card-img.png";
import Button from "components/button/Button";

import "./Card.scss";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-container__block-card">
        <img src={cardImg} alt="cardImg" />
        <div className="card-container__block-card__card-number">
          <p>Card Number</p>
          <p>0123-4567-8901-2345</p>
        </div>
        <div className="card-container__block-card__card-name">
          <p>Name</p>
          <p>Tom Thompson</p>
        </div>
        <div className="card-container__block-card__block-CVC">
          <div>
            <p>Exp.date</p>
            <p>12/21</p>
          </div>
          <div>
            <p>CVC</p>
            <p>1234</p>
          </div>
        </div>
        <div className="card-container__line-decor"></div>
      </div>
      <div className="card-container__block-card__purchase-block">
        <p className="card-container__block-card__purchase-block__name">
          Sofa Francesca
        </p>
        <p className="card-container__block-card__purchase-block__price">
          300$
        </p>
        <Button className="card-container__block-card__purchase-block__btn">
          Accapt
        </Button>
      </div>
    </div>
  );
};

export default Card;
