import React from 'react'
import "./styles.css"
const IconButton = ({icon, onClick, active = false}) => {
  return (
    <div className={`icon-button ${active ? "active" : ""}`} onClick={onClick}>
        {icon}
    </div>
  )
}

export default IconButton