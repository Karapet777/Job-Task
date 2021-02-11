import React, { useContext } from "react";
import Context from "context/Context";
import { ToastContainer } from "react-toastify";

import SelectProduct from "components/selectProduct/SelectProduct";
import { Data } from "data/Data";
import BusketIcon from "assets/icon/busket";
import List from "components/list/List";

import "./ProductPage.scss";

const ProductPage = () => {
  const value = useContext(Context);

  return (
    <div className="app-ProductPage-container">
      <div className="app-ProductPage-container__block-select">
        {Data.selectBarFurniture.map((el) => (
          <SelectProduct key={el.id} title={el.title} />
        ))}
      </div>
      <div className="app-ProductPage-container__block-product">
        {Data.product.map((el) => (
          <List
            click={value.addListBusket.bind(value.addListBusket, el)}
            key={el.id}
            src={el.src}
            price={el.price}
            brand={el.brand}
            iconBtn={<BusketIcon width={16} />}
            textBtn="Add"
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductPage;
