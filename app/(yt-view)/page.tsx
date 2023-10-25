import Image from "next/image";
import { projectData, youtubeData } from "../watch-data";
import Link from "next/link";
import VideoThumbnail from "@/components/VideoThumbnail";
import Sidebar from "@/components/main-page/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col p-8 pt-[5rem]">
          <div className="bg-white p-4">
            <div className="flex flex-col gap-3">
              <div className="flex">
                <div className="flex">
                  <VideoThumbnail
                    href={`/project/${309}`}
                    width={402}
                    height={226}
                    src="https://cdn.discordapp.com/attachments/1109353592009265253/1119407727316312134/dfd61eada7370d64e4e5c96c54df2cf1.png?ex=654581af&is=65330caf&hm=85742db034bca0138ad8727615498e36c87430f871cc1acda9922195e226ba85&"
                  />

                  <div className="flex flex-col">
                    <Link href={`/project/${309}`}>
                      <h2 className="text-[#167ac6] text-[13px] font-medium hover:underline">
                        Bienvenidos al circo!!!!
                      </h2>
                    </Link>
                    <div className="text-[11px] text-[#767676]">De loops</div>
                    <div className="text-[11px] text-[#767676]">
                      Hecho AHORA!!
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className=""></div>
                  <div className=""></div>
                  <div className=""></div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="">Proyectos!!!</h1>
                <div className="flex gap-3">
                  {projectData
                    .filter((project) => project.id !== 309)
                    .map((project, i) => (
                      <div key={i} className="flex flex-col w-[196px]">
                        <VideoThumbnail
                          href={`/project/${project.id}`}
                          width={196}
                          height={110}
                          src={project.thumbnail!}
                        />
                        <div className="flex flex-col">
                          <Link href={`/project/${project.id}`}>
                            <h2 className="text-[#167ac6] text-[13px] font-medium hover:underline">
                              {project.title}
                            </h2>
                          </Link>
                          <div className="text-[11px] text-[#767676]">
                            De loops
                          </div>
                          <div className="text-[11px] text-[#767676]">
                            Hecho el {project.date}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="">Videos chistosos</h1>
                <div className="flex gap-3">
                  {youtubeData.map((project, i) => (
                    <div key={i} className="flex flex-col w-[196px]">
                      <VideoThumbnail
                        href={`/video/${project.id}`}
                        width={196}
                        height={110}
                        src={project.thumbnail!}
                      />
                      <div className="flex flex-col">
                        <Link href={`/video/${project.id}`}>
                          <h2 className="text-[#167ac6] text-[13px] font-medium hover:underline">
                            {project.title}
                          </h2>
                        </Link>
                        <div className="text-[11px] text-[#767676]">
                          De loops
                        </div>
                        <div className="text-[11px] text-[#767676]">
                          Hecho el {project.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
