import React from "react";
import "./HoldingsCard.css";
import avatar from "../assets/icons/avatar.svg";
import arrowRight from "../assets/icons/arrow-right.svg";
import starIcon from "../assets/icons/star.svg";
import starOutlineIcon from "../assets/icons/star-outline.svg";

const HoldingsCard = ({ star }) => {
  return (
    <div className="holdings__card">
      <div className="holdings__card__top">
        <img src={avatar} alt="avatar" />
        <div className="holdings__card__top__center">
          <h2>Canara Robeco Emerging Equities</h2>
          <p>Folio Number:12345678977</p>
          <div className="details">
            <p>Equity</p>
            <p>Flexi Cap</p>
            <span>
              {star > 0 ? (
                <>
                  <img src={starIcon} alt="star" />
                  {star}
                </>
              ) : (
                <>
                  <img src={starOutlineIcon} alt="star" />
                  N.R
                </>
              )}
            </span>
          </div>
        </div>
        <img src={arrowRight} alt="" />
      </div>
      <div className="holdings__card__bottom">
        <div className="section">
          <p>Current</p>
          <h3>₹6,000,000</h3>
        </div>
        <div className="section">
          <p>Gain</p>
          <h3>₹6,000,000</h3>
        </div>
        <div className="section">
          <p>XIRR</p>
          <h3>17%</h3>
        </div>
      </div>
    </div>
  );
};

export default HoldingsCard;
