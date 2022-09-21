import React from "react"
import "./Hero.css"
import SongRow from "./SongRow"
import FavoriteIcon from "@mui/icons-material/Favorite"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import PlayCircleIcon from "@mui/icons-material/PlayCircle"
import { useDataLayerValue } from "../DataLayer"
// import SongRow from "./SongRow"
const Hero = ({ spotify }) => {
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
    <div className="hero">
      <div className="PlaylistImage">
        <img src={discover_weekly?.images[0].url} alt="" />
      </div>
      <div className="PlaylistTitle">
        <h1>PLAYLIST</h1>
        <h2>Tamil Songs</h2>
        <h3>{discover_weekly?.description}</h3>
        <div className="Playlist__Likes">
          <div>
            <a href="#">Spotify</a>
          </div>
          <span class="Type__TypeElement-goli3j-0 cPwEdQ RANLXG3qKB61Bh33I0r2">
            . 45,933 likes
          </span>

          <span class="Type__TypeElement-goli3j-0 cPwEdQ RANLXG3qKB61Bh33I0r2">
            323 songs, <span class="poz9gZKE7xqFwgk231J4">about 19 hr </span>
          </span>
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

export default Hero
