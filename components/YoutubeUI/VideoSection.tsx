import Player from "@/components/YoutubeUI/Player"
import {projectData} from '@/app/watch-data'
import Link from "next/link";
import Image from 'next/image'
import SubscribeButtonIcon from "@/assets/subscribe_button.png";



type VideoSectionType = {
    title: string,
    channel: {name: string, avatar: string},
    description: React.ReactNode,
    views: string
    player: React.ReactNode
}

const VideoSection = (props: VideoSectionType) => {
  return (
      <div className="lg:w-[855px]  flex flex-col gap-[0.65rem]">
        <div className="relative max-w-[855px] h-[510px] w-full bg-black">
            {props.player}
        </div>

        <div className="bg-white pt-[0.65rem] pl-[0.90rem] pr-[0.90rem] pb-[0.55rem] flex flex-col gap-[0.4rem] shadow-[0_1px_2px_rgba(0,0,0,.1)]">
          <span className="text-[24px] text-[#222] font-normal">
            {props.title}
          </span>
          <div className="flex border-b-[#e2e2e2] border-b-[1px] pb-[0.25rem]">
            <div className="flex gap-[0.6rem]">
              <Link href="https://www.youtube.com/@loops-ud9us" target="_blank">
                <img
                  width={48}
                  height={48}
                  src={"https://yt3.googleusercontent.com/qyPzgQzbKsOu2b350GjOMQ70dX9l5tBvDHxmGAD9nLZoqhnE76pi0RIKGjMNkliRe3bDzoC6=s160-c-k-c0x00ffffff-no-rj"
                  }
                />
              </Link>
              <div className="flex flex-col gap-[0.6rem]">
                <a
                  href="https://www.youtube.com/@loops-ud9us"
                  target="_blank"
                  className="text-[13px] p-0 leading-[12px] font-medium"
                >
                  {props.channel.name}
                </a>
                <div className="flex pl-[1px]">
                  <a
                    className="flex gap-[0.38rem] rounded-l-[0.15rem] text-white bg-[#e62117] px-[6px] py-[5px] pb-[4.5px] text-[12px]"
                    href="https://www.youtube.com/@loops-ud9us"
                    target="_blank"
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
                    309
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col ml-auto mt-auto pt-[1.60rem] pb-0 mb-0 text-[19px] text-[#777777]">
              <span>{props.views}</span>
              <div className="absolute h-[2px] ml-auto bg-[#167ac6] w-[155px] top-[3.55rem] right-[0.40rem]"></div>
            </div>
          </div>
          <div className="ml-[0.1rem] flex gap-[23px]">
            <div className="flex gap-[0.4rem] text-[11.5px] text-[#777777]">
              <button className="opacity-[.5] bg-[url(/youtube-icons.png)] bg-addto-button h-[20px] w-[20px] mt-[3px]" />
              <div className="mt-[5px]">Add to</div>
            </div>
            <div className="flex gap-[0.4rem] text-[11.5px] text-[#777777]">
              <button className="opacity-[.5] bg-[url(/youtube-icons.png)] bg-share-button h-[20px] w-[20px] mt-[3px]" />
              <div className="mt-[5px]">Share</div>
            </div>
            <div className="flex gap-[0.4rem] text-[11.5px] text-[#777777]">
              <button className="opacity-[.5] bg-[url(/youtube-icons.png)] bg-more-button h-[20px] w-[20px] mt-[3px]" />
              <div className="mt-[5px]">More</div>
            </div>

            <div className="ml-auto gap-4 flex text-[11px]">
              <div className="flex gap-[0.4rem] text-[#777777]">
                <button className="opacity-[.5] bg-[url(/youtube-icons.png)] bg-like-button h-[20px] w-[20px] mt-[3px]" />
                <div className="mt-[6px]">15,914</div>
              </div>
              <div className="flex gap-[0.4rem] text-[#777777]">
                <button className="opacity-[.5] bg-[url(/youtube-icons.png)] bg-deslike-button h-[20px] w-[20px] mt-[3px]" />
                <div className="mt-[6px]">642</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white pt-[0.65rem] pl-[0.90rem] pr-[0.90rem] pb-[0.65rem] shadow-[0_1px_2px_rgba(0,0,0,.1)]">
          <span className="text-[14px] text-[#222] font-medium">
            Hace 19 años
          </span>
          {props.description}
        </div>
      </div>
  )
}

export default VideoSection