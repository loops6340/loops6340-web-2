import Image from "next/image";
import { projectData, youtubeData } from "../watch-data";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex">
        <div className="w-[230px] bg-white p-[1.4rem] pt-[4rem]">
          <div className="bg-[#cc181e] text-[13px] font-medium p-1 pl-4 pr-4">
            <h2 className="text-white">309</h2>
          </div>
          {/* <br className="text-[black]"/> */}
          <div className="mt-2 border-t border-t-[#F1F1F1]">
            <h2 className="text-[#cc181e] text-[13px] mt-1 ml-2">Loops</h2>
            <div className="ml-3">
              <div className="text-[13px]">Proyectos</div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col p-8 pt-[5rem]">
          <div className="bg-white p-4">
            <div className="flex flex-col gap-3">
              <div className="flex">
              
                <div className="flex">
                    <Link
                      className="relative h-[226px] w-[402px] group"
                      href={`/project/${309}`}
                    >
                      <div className="z-20">
                        <img
                          className="ai hover:z-[2] z-20"
                          src="https://cdn.discordapp.com/attachments/1109353592009265253/1119407727316312134/dfd61eada7370d64e4e5c96c54df2cf1.png?ex=654581af&is=65330caf&hm=85742db034bca0138ad8727615498e36c87430f871cc1acda9922195e226ba85&"
                          width={402}
                          height={226}
                          alt=""
                          style={{ height: 226, objectFit: "cover" }}
                        />
                      </div>
                      <span className="opacity-75 group-hover:opacity-0 text-[11px] absolute z-1 bottom-[1px] h-[14px] leading-[14px] font-medium right-[1px] inline-block aling-top m-0 bg-black text-white p-[0_4px]">
                        3:09
                      </span>
                    </Link>
                    <div className="flex flex-col">
                        <Link href={`/project/${309}`}>
                          <h2 className="text-[#167ac6] text-[13px] font-medium hover:underline">
                            Bienvenidos al circo!!!!
                          </h2>
                        </Link>
                        <div className="text-[11px] text-[#767676]">De loops</div>
                        <div className="text-[11px] text-[#767676]">Hecho AHORA!!</div>
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
                  {projectData.filter(project => project.id !== 309).map((project, i) => (
                    <div key={i} className="flex flex-col w-[196px]">
                      <Link
                        className="relative h-[100px] group"
                        href={`/project/${project.id}`}
                      >
                        <div className="z-20">
                          <img
                            className="ai hover:z-[2] z-20"
                            src={project.thumbnail}
                            width={196}
                            height={100}
                            alt=""
                            style={{ height: 100, objectFit: "cover" }}
                          />
                        </div>
                        <span className="opacity-75 group-hover:opacity-0 text-[11px] absolute z-1 bottom-[1px] h-[14px] leading-[14px] font-medium right-[1px] inline-block aling-top m-0 bg-black text-white p-[0_4px]">
                          3:09
                        </span>
                      </Link>
                      <div className="flex flex-col">
                        <Link href={`/project/${project.id}`}>
                          <h2 className="text-[#167ac6] text-[13px] font-medium hover:underline">
                            {project.title}
                          </h2>
                        </Link>
                        <div className="text-[11px] text-[#767676]">De loops</div>
                        <div className="text-[11px] text-[#767676]">Hecho el {project.date}</div>
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
                      <Link
                        className="relative h-[100px] group"
                        href={`/video/${project.id}`}
                      >
                        <div className="z-20">
                          <img
                            className="ai hover:z-[2] z-20"
                            src={project.thumbnail}
                            width={196}
                            height={100}
                            alt=""
                            style={{ height: 100, objectFit: "cover" }}
                          />
                        </div>
                        <span className="opacity-75 group-hover:opacity-0 text-[11px] absolute z-1 bottom-[1px] h-[14px] leading-[14px] font-medium right-[1px] inline-block aling-top m-0 bg-black text-white p-[0_4px]">
                          3:09
                        </span>
                      </Link>
                      <div className="flex flex-col">
                        <Link href={`/video/${project.id}`}>
                          <h2 className="text-[#167ac6] text-[13px] font-medium hover:underline">
                            {project.title}
                          </h2>
                        </Link>
                        <div className="text-[11px] text-[#767676]">De loops</div>
                        <div className="text-[11px] text-[#767676]">Hecho el {project.date}</div>
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
