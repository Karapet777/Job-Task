import React, { useContext } from "react";
import Context from "context/Context";
import { ToastContainer } from "react-toastify";

import { Data } from "data/Data";
import List from "components/list/List";
import BusketIcon from "assets/icon/busket";
import Arrow from "components/arrow/arrow";

import "./ProductList.scss";

const ProductList = () => {
  const value = useContext(Context);

  return (
    <div className="app-ProductList-container">
      <div>
        <h2 className="app-ProductList-container__title">Best Sellers</h2>
      </div>
      <div className="app-ProductList-container__block-list">
        {Data.product.map((el) => {
          return (
            <List
              key={el.id}
              src={el.src}
              brand={el.brand}
              price={el.price}
              textBtn="Add"
              iconBtn={<BusketIcon width={16} />}
              click={value.addListBusket.bind(value.addListBusket, el)}
            />
          );
        })}
      </div>
      <div className="app-ProductList-container__block-arrow">
        <p>see more</p>
        <Arrow />
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductList;
