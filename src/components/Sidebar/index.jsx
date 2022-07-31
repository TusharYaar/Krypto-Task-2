import "./styles.css";
import { BsArrowBarLeft, BsArrowBarRight, BsTerminal, BsGrid, BsBarChartLine, BsGraphUp, BsAward, BsGift } from "react-icons/bs";
import { useLocation,useNavigate  } from 'react-router-dom';
import { useState } from "react";
import IconButton from "../IconButton";
const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={`sidebar-container ${expanded ? "expanded" : ""}`}>
      <div className="expand-icon-container">
        <IconButton icon={expanded ? <BsArrowBarLeft /> : <BsArrowBarRight />}
          onClick={() => setExpanded(state => !state)}
        />
      </div>
      <div className="sidebar-options-container">
        <SidebarOption icon={<BsGrid />} expanded={expanded} active={location.pathname === "/grid"} onClick={() => navigate("/grid") }>
          <p>
            Grid
          </p>
        </SidebarOption>
        <SidebarOption icon={<BsBarChartLine />} expanded={expanded}  active={location.pathname === "/"} onClick={() => navigate("/") }>
          <p>
            Dashboard
          </p>
        </SidebarOption>
        <SidebarOption icon={<BsTerminal />} expanded={expanded} active={location.pathname === "/terminal"} onClick={() => navigate("/terminal") }>
          <p>
            Terminal
          </p>

        </SidebarOption>
        <SidebarOption icon={<BsGraphUp />} expanded={expanded} active={location.pathname === "/graph"} onClick={() => navigate("/graph") }>
          <p>
            Graphs
          </p>

        </SidebarOption>
        <SidebarOption icon={<BsAward />} expanded={expanded} active={location.pathname === "/awards"} onClick={() => navigate("/awards") }>
          <p>
            Awards
          </p>

        </SidebarOption>
        <SidebarOption icon={<BsGift />} expanded={expanded}  active={location.pathname === "/gift"} onClick={() => navigate("/gift") }>
          <p>
            Gift
          </p>

        </SidebarOption>
      </div>
      <div>
        theme
      </div>
    </div>
  )
}

export default Sidebar



const SidebarOption = ({ icon, expanded, children, onClick, active }) => {

  return (
    <div className={`sidebar-option ${active ? "active" : ""}`} onClick={onClick}>
      {icon}
      {expanded && <div>{children}</div>}
    </div>
  )

}