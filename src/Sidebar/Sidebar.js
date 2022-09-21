import React, { useState } from "react"
import "./Sidebar.css"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined"
import SidebarOption from "./SidebarOption.js/SidebarOption"

import { useDataLayerValue } from "../DataLayer"
const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue()
  return (
    <div className="Sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />

      <SidebarOption Icon={HomeOutlinedIcon} title="Home" />
      <SidebarOption Icon={SearchOutlinedIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicOutlinedIcon} title="Your Library" />
      <br />
      <hr />
      <strong className="sidebartitle">My Playlist #1</strong>
      <br />
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
      {/* <SidebarOption title="GOKULA KRISHNAN" />
      <SidebarOption title="GOKULA KRISHNAN" />
      <SidebarOption title="GOKULA KRISHNAN" />
      <SidebarOption title="GOKULA KRISHNAN" />
      <SidebarOption title="GOKULA KRISHNAN" /> */}
    </div>
  )
}

export default Sidebar
