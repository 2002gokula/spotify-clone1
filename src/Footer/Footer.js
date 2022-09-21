import React from "react"
import PlayCircleIcon from "@mui/icons-material/PlayCircle"
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious"
import SkipNextIcon from "@mui/icons-material/SkipNext"
import ShuffleIcon from "@mui/icons-material/Shuffle"
import RepeatIcon from "@mui/icons-material/Repeat"
import VolumeDownOutlinedIcon from "@mui/icons-material/VolumeDownOutlined"
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined"
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay"
import { Grid, Slider } from "@material-ui/core"

import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo "
          src="https://pbs.twimg.com/profile_images/1515927573854711810/EyL67-uR_400x400.jpg"
          alt=""
        />
        <div className="footer__songInfo">
          <p>albem</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        {/* <PauseCircleOutlineOutlinedIcon
          fontSize="large"
          className="footer__icon"
        /> */}
        <PlayCircleIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={1}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownOutlinedIcon />
          </Grid>
          <Grid item xs className="volume">
            <Slider className="b" aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
