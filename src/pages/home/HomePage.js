import DecorSection from "containers/decorSection/DecorSection";
import Home from "containers/home/Home";
import ProductList from "containers/sellersSection/ProductList";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Home />
      <DecorSection />
      <ProductList />
    </div>
  );
};

export default HomePage;
