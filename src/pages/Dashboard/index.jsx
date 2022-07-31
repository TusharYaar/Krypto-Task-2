import "./styles.css"
import {useState, useEffect, useCallback, useMemo} from "react"; 

import useWebSocket, { ReadyState } from 'react-use-websocket';

import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";



const Dashboard = () => {
    const [financeData, setFinanceData] = useState({});

  const { sendMessage, lastMessage, readyState } = useWebSocket(process.env.REACT_APP_SOCKET_URL);
  useEffect(() => {
    if (lastMessage !== null) {
      setFinanceData((lastMessage.data));
    }
  }, [lastMessage]);

  console.log(financeData);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

    return (
        <div className="dashboard-container">
            <Sidebar>
            </Sidebar>
            <div className="body-container">
                <Topbar lastPrice={30000} change={0.00} low={23935.32} high={23935.32}/>
            </div>
        </div>
    )
}

export default Dashboard