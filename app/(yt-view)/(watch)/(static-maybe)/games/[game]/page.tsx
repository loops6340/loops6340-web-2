import Player from "@/components/YoutubeUI/Player"
import VideoSection from "@/components/YoutubeUI/VideoSection"

const page = ({ params }: { params: { game: string } }) => {
  return (
     <VideoSection
        channel={{name:"pawer ranger rojo", avatar: "https://i.imgur.com/8P3AIo6.png"}}
        title="HOLA XD"
        views="12,072,006"
        //@ts-ignore
        player={<iframe className="w-full h-full" allow="autoplay; camera; focus-without-user-activation *; monetization; gamepad; keyboard-map *; xr-spatial-tracking; clipboard-write; web-share; accelerometer; magnetometer; gyroscope; microphone *" scrolling="no" src={decodeURIComponent(params.game)}/>}
        description={
         "dasd"
        }
    />
  )
}

export default page