import React, { useContext, useState } from "react";

import Context from "context/Context";
import List from "components/list/List";
import Card from "pages/card/Card";

import "./BusketPage.scss";

const BusketPage = () => {
  const value = useContext(Context);
  const [isCard, setIsCard] = useState(false);

  const isCardHandler = () => {
    setIsCard(!false);
  };

  return (
    <div className="app-busket-container">
      {isCard ? (
        <Card />
      ) : value.Busket.length === 0 ? (
        <p className="app-busket-container__text">Your cart is empty</p>
      ) : (
        value.Busket.map((el) => {
          return (
            <List
              key={el.id}
              src={el.src}
              price={el.price}
              brand={el.brand}
              textBtn="Buy Now"
              click={isCardHandler}
            />
          );
        })
      )}
    </div>
  );
};

export default BusketPage;
