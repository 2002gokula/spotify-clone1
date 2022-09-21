import React from "react"
import Header from "../Header/Header"
import Hero from "../Hero/Hero"
import "./Body.css"
import SongRow from "../Hero/SongRow"
import FavoriteIcon from "@mui/icons-material/Favorite"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import PlayCircleIcon from "@mui/icons-material/PlayCircle"
import { useDataLayerValue } from "../DataLayer"
const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue()
  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          })
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          })
        })
      })
  }

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          })
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          })
        })
      })
  }

  return (
    <div className="Body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2 style={{ fontSize: "94px" }}>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleIcon className="body__shuffle" onClick={playPlaylist} />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  )
}

export default Body
