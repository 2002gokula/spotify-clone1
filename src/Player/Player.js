import React from "react"
import Sidebar from "../Sidebar/Sidebar"
import "./Player.css"
import Body from "../Sidebar/Body"
import Footer from "../Footer/Footer"
const Player = () => {
  return (
    <div className="player">
      <div className="Player_body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  )
}

export default Player
