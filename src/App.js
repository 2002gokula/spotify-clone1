import { useEffect, useState } from "react"
import SpotifyWebApi from "spotify-web-api-js"
import "./App.css"
import Login from "./Login/Login"
import { getTokenFromResponse } from "./Login/spotify/Spotify"
import Player from "./Player/Player"
import { useDataLayerValue } from "./DataLayer"
const spotify = new SpotifyWebApi()
function App() {
  const [token, setToken] = useState(null)
  const [{ user }, dispatch] = useDataLayerValue()
  useEffect(() => {
    const hash = getTokenFromResponse()
    window.location.hash = ""
    let _token = hash.access_token
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      setToken(_token)
      spotify.setAccessToken(_token)

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        })
      })
      const RondomNumber = () => {
        Math.floor(Math.random())
      }

      spotify.getPlaylist("37i9dQZF1DX1i3hvzHpcQV").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      )
    }
  }, [token, dispatch])
  console.log(token)
  console.log(user)
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  )
}

export default App
