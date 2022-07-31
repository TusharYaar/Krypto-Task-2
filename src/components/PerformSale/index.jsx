import { useState } from "react";
import Button from "../Button";
import "./styles.css";

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
        <Button  variant={section === "buy" ? "success" : "error"} >{section === "buy" ? "Buy BTC" : "sell BTC"}</Button>
    </div>
  )
}

export default PerformSale