import React, { useState } from "react";
import { Link } from "react-router-dom";

import BusketIcon from "assets/icon/busket";
import SearchIcon from "assets/icon/search";
import Logo1 from "assets/img/your.png";
import Logo2 from "assets/img/Interior.png";

import "./Header.scss";

const Header = () => {
  const [isActive, setisActive] = useState(true);

  const changeBackground = () => {
    if (window.scrollY <= 10) {
      setisActive(true);
    } else {
      setisActive(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={
        isActive ? "app-header-container" : "app-header-container activ"
      }
    >
      <nav className="app-header-container__nav">
        <div>
          <Link to="/">
            <img
              className="app-header-container__nav__your"
              src={Logo1}
              alt="logo"
            />
            <img
              className="app-header-container__nav__logo"
              src={Logo2}
              alt="logo"
            />
          </Link>
        </div>
        <ul>
          <Link to="/Product">
            <li>Furniture</li>
          </Link>
          <li>Lighting</li>
          <li>Decor</li>
          <li>Tablewear</li>
          <Link to="/Busket">
            <li>
              <BusketIcon height="29" width="29" />
            </li>
          </Link>
          <li>
            <SearchIcon className="app-header-container__nav__searchIcon" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
