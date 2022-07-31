import "./styles.css"

import {BsArrowDown, BsArrowUp} from "react-icons/bs";

const Topbar = ({ lastPrice, change, low, high }) => {
  return (
    <div className='topbar-container'>
      <div className='topbar-sections'>
      <div className="topbar-section selection">
      <img src="https://img.icons8.com/color/48/000000/bitcoin--v1.png"/>
          <div>
          <h6 className="heading">
            BitCoin
          </h6>
          <p className="value">
            BTC/USDC
          </p>
          </div>
        </div>
        <div className="topbar-section">
          <h6 className="heading">
            Last Price
          </h6>
          <p className={`value ${lastPrice > 0 ? "success" : "error"}` }>
            {lastPrice} USDC
          </p>
        </div>
        <div className="topbar-section">
          <h6 className="heading">
            24h Change
          </h6>
          <p className={`value ${change >= 0 ? "success" : "error"}` }>
            {change >=0 ? <BsArrowUp />: <BsArrowDown />}
            {change} %
          </p>
        </div>
        <div className="topbar-section">
          <h6 className="heading">
            24h Low
          </h6>
          <p className="value">
            {low}
          </p>
        </div>
        <div className="topbar-section">
          <h6 className="heading">
            24h High
          </h6>
          <p className="value">
            {high}
          </p>
        </div>
      </div>
      <div className='topbar-other-section'>
      </div>
    </div>
  )
}

export default Topbar