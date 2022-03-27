import React from "react";
import "./PortfolioAnalysis.css";
import greyArrowUp from "../assets/icons/grey-arrow-up.svg";

const PortFolioAnalysis = () => {
  return (
    <div className="holdings">
      <div className="holdings__container">
        <div className="header">
          <h1>Portfolio Analysis</h1>
          <p>
            Investocart
            <img src={greyArrowUp} alt="" />
          </p>
          {/* <div className="options">
            <label>
              <input type="radio" name="type" />
              XIRR
            </label>
            <label>
              <input type="radio" name="type" />
              Abs.
            </label>
          </div> */}
        </div>
        <div className="nav__buttons">
          <button className="active">Equity (93.41%)</button>
          <button>Others(0.12%)</button>
          <button>Others(0.12%)</button>
        </div>
        <div className="stock__table">
          <div className="table__header">
            <h2>Top Stock Holdings</h2>
            <p>As of Dec 5, 2021 </p>
          </div>
          <div className="table__body">
            <div className="row">
              <p>Endurance Development</p>
              <div className="meter">
                <div className="range"></div>
              </div>
              <p>26.1%</p>
            </div>
            <div className="row">
              <p>Endurance Development</p>
              <div className="meter">
                <div className="range"></div>
              </div>
              <p>26.1%</p>
            </div>
            <div className="row">
              <p>Endurance Development</p>
              <div className="meter">
                <div className="range"></div>
              </div>
              <p>26.1%</p>
            </div>
            <div className="row">
              <p>Endurance Development</p>
              <div className="meter">
                <div className="range"></div>
              </div>
              <p>26.1%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortFolioAnalysis;
