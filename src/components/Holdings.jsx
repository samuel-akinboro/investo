import React from "react";
import "./Holdings.css";
import greyArrowUp from "../assets/icons/grey-arrow-up.svg";
import HoldingsCard from "./HoldingsCard";

const Holdings = () => {
  return (
    <div className="holdings">
      <div className="holdings__container">
        <div className="header">
          <h1>Your Holdings</h1>
          <p>
            XIRR %
            <img src={greyArrowUp} alt="" />
          </p>
          <div className="options">
            <label>
              <input type="radio" name="type" />
              XIRR
            </label>
            <label>
              <input type="radio" name="type" />
              Abs.
            </label>
          </div>
        </div>
        <div className="nav__buttons">
          <button className="active">Investocart</button>
          <button>External</button>
          <button>All</button>
        </div>
        <div className="card__list">
          <HoldingsCard />
          <HoldingsCard />
          <HoldingsCard />
          <HoldingsCard />
        </div>
        <div className="show__more__holdings">
          <p>+6 more holdings</p>
          <button>View All Funds</button>
        </div>
      </div>
    </div>
  );
};

export default Holdings;
