import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Holdings from "./components/Holdings";
import "./styles.css";
import chartIcon from "./assets/icons/chart.svg";
import arrowRightIcon from "./assets/icons/arrow-right.svg";
import PendingOrders from "./components/PendingOrders";
import PortFolioAnalysis from "./components/PortfolioAnalysis";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <div className="right__accordion__card">
        <div className="accordion__top">
          <div className="accordion__top__left">
            <h2>
              <img src={chartIcon} alt="chart icon" />
              SIP
            </h2>
          </div>
          <div className="accordion__top__right">
            <img src={arrowRightIcon} alt="arrow right" />
          </div>
        </div>
        <div className="accordion__bottom">
          <div className="accordion__bottom__left">
            <p>
              SIP in OCT 21:
              <span>₹20,000</span>
            </p>
          </div>
          <div className="accordion__bottom__right">
            <p>
              SIP Count in OCT 21:
              <span>4</span>
            </p>
          </div>
        </div>
      </div>
      <div className="right__accordion__card">
        <div className="accordion__top">
          <div className="accordion__top__left">
            <h2>Transactions</h2>
          </div>
          <div className="accordion__top__right">
            <img src={arrowRightIcon} alt="arrow right" />
          </div>
        </div>
      </div>
      <Holdings />
      <PendingOrders />
      <PortFolioAnalysis />
      <BottomNav />
    </div>
  );
}
