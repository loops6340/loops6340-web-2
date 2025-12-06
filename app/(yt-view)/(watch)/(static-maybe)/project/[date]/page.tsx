import Image from "next/image";
import fs from "fs";
import unzipper from "unzipper";
import child from "child_process";
import Link from "next/link";
import Button from "@/components/Button";
import ConchaMeiggsTraductor from "@/components/ConchaMeiggsTraductor";

import { projectData } from "@/app/watch-data";
import VideoSection from "@/components/YoutubeUI/VideoSection";
import SideVideosSection from "@/components/YoutubeUI/SideVideosSection";
import Player from "@/components/YoutubeUI/Player";
import Data from "@/app/base-falsa";
import SideVideos from "@/components/YoutubeUI/SideVideo";
// const getProject = async (id: number) => {
//   return projectData.find(project => project.id === id)
// }

export default async function Date(props: any) {
  const project = projectData.find(
    (project) => project.id === parseInt(props.params.date)
  )!;

  return (
    <>
      <VideoSection
        title={project.title}
        description={project.description}
        channel={{ name: "loops", avatar: "" }}
        views={"309,309,309"}
        player={
          <div className="w-full h-full relative after:absolute after:content-[''] after:shadow-[inset_0px_0px_80px_rgba(0,0,0,0.3)] after:pointer-events-none after:top-0 after:bottom-0 after:left-0 after:right-0">
            <iframe src={project.content} width={"100%"} height={"100%"} />
          </div>
        } />
    
    </>
  );
}
