import "./styles.css";

import { useState } from "react";

import Button from "../Button";
import Card from "../Card";


const PerformSale = () => {
    const [section, setSection] = useState("buy");
  return (
    <div className="perform-sale-container">
        <div className="btn-container">
        <Button variant="success" active={section === "buy"} onClick={() => setSection("buy")}>
            Buy
        </Button>
        <Button variant="error" active={section === "sell"} onClick={() => setSection("sell")}>
            Sell
        </Button>
        </div>
        
        <Card title="Amount in USDC" className="perform-sale-card" suffix={<span className="usdc-purple">USDC</span>}>0</Card>
        <Card title="Amount in BTC" className="perform-sale-card" suffix={<span className="btc-green">BTC</span>} > 0</Card>
        <Button  variant={section === "buy" ? "success" : "error"} >{section === "buy" ? "Buy BTC" : "sell BTC"}</Button>
        <Card title="Invested Value"><p className="card-data-success">2,8654.45</p></Card>
        <Card title="Current Value"><p className="card-data-success">2,8654.45</p></Card>
    </div>
  )
}

export default PerformSale