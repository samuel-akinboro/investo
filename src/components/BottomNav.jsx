import React from "react";
import "./BottomNav.css";
import homeIcon from "../assets/icons/home.svg";
import portfolioIcon from "../assets/icons/portfolio-icon.svg";
import helpIcon from "../assets/icons/help-icon.svg";
import investIcon from "../assets/icons/invest-icon.svg";

const BottomNav = () => {
  return (
    <div className="bottom__nav">
      <div className="bottom__nav__container">
        <div className="link">
          <img src={homeIcon} alt="" />
          <p>Home</p>
        </div>
        <div className="link active">
          <img src={portfolioIcon} alt="" />
          <p>Portfolio</p>
        </div>
        <div className="link">
          <img src={investIcon} alt="" />
          <p>Invest</p>
        </div>
        <div className="link">
          <img src={helpIcon} alt="" />
          <p>Help</p>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
