import Image from "next/image";
import fs from "fs";
import unzipper from "unzipper";
import child from "child_process";
import Link from "next/link";
import Button from "@/components/Button";
import ConchaMeiggsTraductor from "@/components/ConchaMeiggsTraductor";

import { projectData } from "@/app/watch-data";
// const getProject = async (id: number) => {
//   return projectData.find(project => project.id === id)
// }

export default async function Date(props: any) {
  const project: any = projectData.find(
    (project) => project.id === parseInt(props.params.date)
  );

  return (
    <>
      <div className="w-[854px] flex flex-col gap-[0.65rem]">
        <div className="">
          {/* <ConchaMeiggsTraductor /> */}
          {
            project.type === "image" ? <img src={project.content} alt="" /> :   <iframe
            src={project.content}
            width="100%"
            height="480px"
            name="myIFrame"
          ></iframe>
          }
        

          {/* <Button disabled={true}>
          Ant
        </Button>
        <Link passHref target='_blank' href={`/winview/${props.params.date}`}>
          <Button>
            Sig
          </Button>
        </Link> */}
        </div>

        <div className="bg-white pt-[0.65rem] pl-[0.90rem] pr-[0.90rem]">
          <span className="text-[24px] text-[#222] font-normal">
            {project.title}
          </span>
          <div className="flex">
            <div className="flex">
              <div></div>
              <div></div>
            </div>
            <div className="ml-auto">3,309</div>
          </div>
        </div>
        <div className="bg-white pt-[0.65rem] pl-[0.90rem] pr-[0.90rem] pb-[0.65rem]">
          <span className="text-[16px] text-[#222] font-normal">
            Publicado el {project.date}
          </span>
          <p>{project.description}</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col bg-white">
        <div className="bg-white p-4 flex flex-col gap-2">
          {projectData.filter(project => project.id !== 309).map((project, i) => (
            <div key={i} className="flex gap-2 w-[100%] group">
              <Link className="relative h-[68px]" href={`/project/${project.id}`}>
                <div className="z-20">
                  <img
                    className="ai hover:z-[2] z-20"
                    src={project.thumbnail}
                    width={120}
                    height={68}
                    alt=""
                    style={{ height: 68, minWidth: 120, objectFit: "cover" }}
                  />
                </div>
                <span className="opacity-75 text-[11px] absolute z-1 bottom-[1px] h-[14px] leading-[14px] font-medium right-[1px] inline-block aling-top m-0 bg-black text-white p-[0_4px]">
                  3:09
                </span>
              </Link>

              <div className="flex flex-col">
                        <Link href={`/project/${1}`} className="flex flex-col">
                        <h2 className="text-black font-medium text-[13px] group-hover:text-[#167ac6] bold">
                        {project.title}
                          </h2>
                          <div className="text-[11px] text-[#767676]">De loops</div>
                        <div className="text-[11px] text-[#767676]">Hecho el {project.date}</div>
                        </Link>
                       
                      </div>
             
            </div>
            // <div key={i} className="flex gap-2 h-[100px] w-[100%]">
            //     {/* <Link href={`/watch/${project.id}`} className="w-[120px]"> */}
            //         <img src={project.thumbnail} width={120} alt="" />
            //     {/* </Link> */}
            //     <h2 className="text-[13px] break-words break-all">
            //         {project.title}
            //     </h2>
            // </div>
          ))}
        </div>
      </div>
    </>
  );
}
