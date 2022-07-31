import "./styles.css"
import {useState, useEffect, useCallback, useMemo} from "react"; 

import useWebSocket, { ReadyState } from 'react-use-websocket';

import Topbar from "../../components/Topbar";
import PerformSale from "../../components/PerformSale";

import TradingViewWidget ,{Themes } from 'react-tradingview-widget';



const Dashboard = () => {
    const [financeData, setFinanceData] = useState({});

  const { sendMessage, lastJsonMessage, readyState } = useWebSocket(process.env.REACT_APP_SOCKET_URL);
  useEffect(() => {
    if (lastJsonMessage !== null) {
      setFinanceData(lastJsonMessage);
    }
  }, [lastJsonMessage]);

  console.log((financeData));

  // const connectionStatus = {
  //   [ReadyState.CONNECTING]: 'Connecting',
  //   [ReadyState.OPEN]: 'Open',
  //   [ReadyState.CLOSING]: 'Closing',
  //   [ReadyState.CLOSED]: 'Closed',
  //   [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  // }[readyState];

    return (
        <div className="dashboard-container">
            <div className="body-container">
                <Topbar lastPrice={30000} change={0.00} low={23935.32} high={23935.32}/>
                <div className="data-container">
                <div className="data-graph-container"><TradingViewWidget symbol="BTC/USDC" theme={Themes.DARK} autosize={true} /></div>
                  <PerformSale />
                </div>
            </div>
        </div>
    )
}

export default Dashboard