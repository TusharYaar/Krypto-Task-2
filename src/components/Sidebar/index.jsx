import "./styles.css";
import { BsArrowBarLeft, BsArrowBarRight, BsTerminal, BsGrid, BsBarChartLine, BsGraphUp, BsAward, BsGift } from "react-icons/bs";

import { useState } from "react";
import IconButton from "../IconButton";
const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`sidebar-container ${expanded ? "expanded" : ""}`}>
      <div className="expand-icon-container">
        <IconButton icon={expanded ? <BsArrowBarLeft /> : <BsArrowBarRight />}
          onClick={() => setExpanded(state => !state)}
        />
      </div>
      <div className="sidebar-options-container">
        <SidebarOption icon={<BsGrid />} expanded={expanded}>
          <p>
            Grid
          </p>
        </SidebarOption>
        <SidebarOption icon={<BsBarChartLine />} expanded={expanded}>
          <p>
            Charts
          </p>
        </SidebarOption>
        <SidebarOption icon={<BsTerminal />} expanded={expanded}>
          <p>
            Terminal
          </p>

        </SidebarOption>
        <SidebarOption icon={<BsGraphUp />} expanded={expanded}>
          <p>
            Graphs
          </p>

        </SidebarOption>
        <SidebarOption icon={<BsAward />} expanded={expanded}>
          <p>
            Awards
          </p>

        </SidebarOption>
        <SidebarOption icon={<BsGift />} expanded={expanded}>
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
    <div className="sidebar-option" onClick={onClick}>
      {icon}
      {expanded && <div>{children}</div>}
    </div>
  )

}