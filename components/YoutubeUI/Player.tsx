"use client"
import ReactPlayer from 'react-player'
//@ts-ignore
import {MediaControlBar, MediaController, MediaFullscreenButton, MediaMuteButton, MediaPlaybackRateButton, MediaPlayButton, MediaTimeDisplay, MediaTimeRange, MediaVolumeRange} from "media-chrome/react"

type Props = {
  src: string;
}

const Player = ({ src }: Props) => {
  return (
    <MediaController
      style={{
        width: "100%",
        height: "100%",
        aspectRatio: "16/9",
      }}
    >
      <ReactPlayer
        autoPlay
        slot="media"
        src={src}
        controls={false}
        style={{
          width: "100%",
          height: "100%",
          //@ts-ignore
          "--controls": "none",
        }}
      ></ReactPlayer>
      <MediaControlBar  style={{ width: "100%", paddingLeft: 15, paddingRight: 15}}>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <MediaTimeRange id="mediarange" style={{ width: "100%", margin: 0, padding: 0, color: "red",
            //@ts-ignore
            "--_media-range-padding": 0,
            "--media-range-bar-color": "red",
            "--media-range-thumb-background": "red",
            "--media-range-thumb-width": "13px",
            "--media-range-thumb-height": "13px",

            accentColor: "red",
            "#range": {accentColor: "red"}
            }} color="red" />
          <div style={{ width: "100%", display: "flex", margin: 0, padding: 0 }}>
            <MediaPlayButton className='bg-transparent' />
            <MediaMuteButton className='bg-transparent' />
            <MediaVolumeRange className='bg-transparent' />
            <MediaTimeDisplay  className='bg-transparent' showDuration />
            <MediaPlaybackRateButton className='bg-transparent' />
            <MediaFullscreenButton className='bg-transparent' style={{ marginLeft: "auto" }} />
          </div>
        </div>
      </MediaControlBar>
    </MediaController>
  )
}

export default Player