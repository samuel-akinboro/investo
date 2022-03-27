import React from "react";
import "./Banner.css";
import Slider from "react-slick";
import whiteArrowDown from "../assets/icons/white-arrow-down.svg";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider"
  };

  return (
    <div className="banner">
      <div className="banner__container">
        <h1>Mutual funds</h1>
        <Slider {...settings}>
          <div className="banner__card">
            <div className="banner__card__container">
              <div className="card__top">
                <div className="card__left">
                  <p>Current Value</p>
                  <h2>₹6,000,000</h2>
                  <p>NAV as of March 25, 2021</p>
                </div>
                <div className="card__right">
                  <p>
                    Investocart
                    <img src={whiteArrowDown} alt="arrow down" />
                  </p>
                  <p>Gain/Loss</p>
                  <h3>₹6,000,000</h3>
                </div>
              </div>
              <div className="card__bottom">
                <div className="section">
                  <p>Invested Cost</p>
                  <h3>₹6,000,000</h3>
                </div>
                <div className="section">
                  <p>Absolute Return</p>
                  <h3>4%</h3>
                </div>
                <div className="section">
                  <p>XIRR</p>
                  <h3>34%</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="banner__card">
            <div className="banner__card__container">
              <div className="card__top">
                <div className="card__left">
                  <p>Current Value</p>
                  <h2>₹6,000,000</h2>
                  <p>NAV as of March 25, 2021</p>
                </div>
                <div className="card__right">
                  <p>
                    Investocart
                    <img src={whiteArrowDown} alt="arrow down" />
                  </p>
                  <p>Gain/Loss</p>
                  <h3>₹6,000,000</h3>
                </div>
              </div>
              <div className="card__bottom">
                <div className="section">
                  <p>Invested Cost</p>
                  <h3>₹6,000,000</h3>
                </div>
                <div className="section">
                  <p>Absolute Return</p>
                  <h3>4%</h3>
                </div>
                <div className="section">
                  <p>XIRR</p>
                  <h3>34%</h3>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
