import React from "react";
import "./PendingOrders.css";
import arrowRightIcon from "../assets/icons/arrow-right.svg";

const PendingOrders = () => {
  return (
    <div className="pending">
      <div className="pending__container">
        <h1>Pending Orders</h1>
        <div className="pending__status">
          <div className="section">
            <h4>Order amount in process</h4>
            <p>₹ 5,000,000</p>
          </div>
          <div className="section">
            <h4>Orders in process</h4>
            <p>₹ 5,000,000</p>
          </div>
          <img src={arrowRightIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PendingOrders;
