import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import ProductPage from "pages/product/ProductPage";
import BusketPage from "pages/busket/BusketPage";
import Footer from "components/footer/Footer";
import HomePage from "pages/home/HomePage";
import Context from "context/Context";

function App() {
  const Busket = [];

  const addToBusket = (id) => {
    toast("add your Basket!");
  };

  const addListBusket = (el) => {
    Busket.push(el);
    addToBusket();
  };

  const value = {
    Busket,
    addListBusket,
  };
  return (
    <Context.Provider value={(Context, value)}>
      <Router>
        <Header />
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/product" component={ProductPage} />
            <Route path="/busket" component={BusketPage} />
          </Switch>
          <Footer />
        </Layout>
      </Router>
    </Context.Provider>
  );
}

export default App;
