import { Suspense } from "react";
import ytsr from "ytsr";
import SeccionRecomendados from "./recomendados";
import dynamic from "next/dynamic";
import Head from "next/head";
import Recomendados from "./recomendados";
import Image from "next/image";
import SubscribeButtonIcon from "@/assets/subscribe_button.png";
import Link from "next/link";
import ytSearch from "@/lib/yt-searchlocal";
import yts from "yt-search";

async function searchID(search: string) {
  const video = await (ytSearch as typeof import("yt-search"))({ videoId: search,  })
  return [video]
}
async function searchTitle(search: string) {
  const video = await (ytSearch as typeof import("yt-search"))({ query: search })
  return video.videos
}

type Props = {

    searchParams: {
      title: string,
      v: string
    }
  
}


export async function Contenido(props: Props) {
  let videos:yts.VideoMetadataResult[] | yts.VideoSearchResult[];
  let recomendados: ytsr.Video[] = [];
  if(props.searchParams.v){
    const idSearchResult = await searchID(props.searchParams.v);
    videos = idSearchResult;

  } else {
    const idSearchResult = await searchTitle(props.searchParams.title);
    videos = idSearchResult;
  }


  return (
    <>
      <div className="lg:w-[854px] flex flex-col gap-[0.65rem]">
        <div>
          <iframe
            className="aspect-video"
            src={`https://www.youtube.com/embed/${
              props.searchParams.v || videos[0].videoId
            }?autoplay=1&mute=0`}
            width="100%"
            name="myIFrame"
            allowFullScreen
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
        <div className="bg-white pt-[0.65rem] pl-[0.90rem] pr-[0.90rem] pb-[0.65rem] flex flex-col gap-2 shadow-[0_1px_2px_rgba(0,0,0,.1)]">
          <span className="text-[24px] text-[#222] font-normal">
            {videos[0].title}
          </span>
          <div className="flex">
            <div className="flex gap-[0.6rem]">
            <Link href={videos[0].author?.url!}>
              <img
                width={48}
                height={48}
                //@ts-ignore
                src={videos[0].author!.avatar}
              />
            </Link>
              <div className="flex flex-col gap-[0.6rem]">
                <a href={videos[0].author?.url!} className="text-[13px] p-0 leading-[12px] font-medium">
                  {videos[0].author?.name}
                </a>
                <div className="flex pl-[1px]">
                  <a
                    className="flex gap-[0.38rem] rounded-l-[0.15rem] text-white bg-[#e62117] px-[6px] py-[5px] pb-[4.5px] text-[12px]"
                    href={videos[0].author?.url}
                  >
                    <div className="flex">
                      <Image
                        className="m-auto"
                        height={12}
                        style={{ minHeight: 12 }}
                        src={SubscribeButtonIcon}
                        alt=""
                      />
                    </div>
                    <span className="leading-[14px] font-[400] p-0">
                      Subscribe
                    </span>
                  </a>
                  <span className="h-[24px] leading-[24px] px-[6.5px] pr-[6.5px] rounded-r-[0.05rem] border border-solid border-[#ccc] bg-[#fafafa] text-[#777777] text-[11px]">
                    1,908,251
                  </span>
                </div>
              </div>
            </div>

            <div className="ml-auto mt-auto text-[19px]">{videos[0].views}</div>
          </div>
        </div>
        <div className="bg-white pt-[0.65rem] pl-[0.90rem] pr-[0.90rem] pb-[0.65rem] shadow-[0_1px_2px_rgba(0,0,0,.1)]">
          <span className="text-[16px] text-[#222] font-normal">
            {videos[0].ago}
          </span>
          <p>{videos[0].description}</p>
        </div>
        <div
          className="bg-white pt-[0.65rem] pl-[0.90rem] pr-[0.90rem] pb-[0.65rem] shadow-[0_1px_2px_rgba(0,0,0,.1)]"
        >
        </div>
      </div>
      <div className="flex-1 flex flex-col bg-white">
        <Suspense>
          <Recomendados
            recomendados={videos.slice(1)}
            tituloVideoRaiz={decodeURIComponent(videos[0].title)}
          />
        </Suspense>
      </div>
    </>
  );
}
