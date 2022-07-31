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
        // const parsed = JSON.parse(lastMessage.data);
        // console.log(parsed);
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
                <Topbar />
            </div>
        </div>
    )
}

export default Dashboard