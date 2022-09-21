import React from "react"
import "./Login.css"
import { accessUrl } from "./spotify/Spotify"
const Login = () => {
  return (
    <div className="login">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
        alt="logo"
      />
      <a href={accessUrl}>Login</a>
    </div>
  )
}

export default Login
