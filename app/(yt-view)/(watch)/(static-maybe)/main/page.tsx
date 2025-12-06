import Image from "next/image";

import Link from "next/link";

import SubscribeButtonIcon from "@/assets/subscribe_button.png";

import { projectData } from "@/app/watch-data";
import SideVideo from "@/components/YoutubeUI/SideVideo";
import Data from "@/app/base-falsa";

import SideVideosSection from "@/components/YoutubeUI/SideVideosSection";
import VideoSection from "@/components/YoutubeUI/VideoSection";
import Player from "@/components/YoutubeUI/Player";

export default async function Main(props: any) {
  return (
    <>
      <VideoSection
        channel={{name:"pawer ranger rojo", avatar: "https://i.imgur.com/8P3AIo6.png"}}
        title="HOLA XD"
        views="12,072,006"
        player={
          <div className="w-full h-full flex">
            <img className="max-h-full align-middle items-center justify-center ml-auto mr-auto" src="https://ih1.redbubble.net/image.795196398.7959/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg"/>
          </div>
        }
        description={
          <p className="text-[14px] leading-none">
            Sobre mí: Discord: @alfondohaysitio
            <br />
            Spotify:{" "}
            <a
              target="_blank"
              className="hover:underline text-[#167ac6]"
              href="https://open.spotify.com/user/zdhspan6cb4qf6e9bgcj9tbfv"
            >
              https://open.spotify.com/user/zdhspan6cb4qf6e9bgcj9tbfv
            </a>
            <br />
            Anilist:{" "}
            <a
              target="_blank"
              className="hover:underline text-[#167ac6]"
              href="https://anilist.co/user/loops6340/"
            >
              https://anilist.co/user/loops6340/
            </a>
          </p>
        }
      />

    </>
  );
}
