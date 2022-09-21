import React from "react"
import "./SidebarOption.css"
const SidebarOption = ({ title, Icon }) => {
  return (
    <div className="SidebarOption">
      {Icon && <Icon className="sidebarIcon" />}
      {Icon ? <h1>{title}</h1> : <p>{title}</p>}
    </div>
  )
}

export default SidebarOption
