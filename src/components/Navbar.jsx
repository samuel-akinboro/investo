import React from "react";
import "./Navbar.css";
import MenuIcon from "../assets/icons/menu.svg";
import cartIcon from "../assets/icons/cart.svg";
import greyArrowDownIcon from "../assets/icons/grey-arrow-down.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="container__left">
          <img src={MenuIcon} alt="menu icon" />
          <p>
            Rajeev Agarwal
            <span>
              <img src={greyArrowDownIcon} alt="arrow down" />
            </span>
          </p>
        </div>
        <div className="container__right">
          <img src={cartIcon} alt="cart" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
