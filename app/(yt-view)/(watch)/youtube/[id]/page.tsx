import { youtubeData } from "@/app/watch-data";
import VideoThumbnail from "@/components/VideoThumbnail";
import Link from "next/link";
import { NextResponse } from "next/server";
import ytsr from 'ytsr'

async function search(search: string) {
    console.log("TARDO", search)
    const searchResult = await ytsr.getFilters(search)
    console.log("YANO")
    const f = searchResult.get("Type")?.get("Video")
    const a = await ytsr(f!.url!, {pages:1})
    console.log(f!.url)
    return a.items[0] as ytsr.Video
}
export default async function Date(props: any) {
  

  const video = await search(decodeURIComponent(props.params.id))

  return (
    <>
      <div className="lg:w-[854px] flex flex-col gap-[0.65rem]">
        <div className="">
          {/* <ConchaMeiggsTraductor /> */}
          <iframe
            src={`https://www.youtube.com/embed/${video.id}`}
            width="100%"
            height={480}
            name="myIFrame"
          ></iframe>

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
            {video.title}
          </span>
          <div className="flex">
            <div className="flex">
              <div></div>
              <div></div>
            </div>
            <div className="ml-auto">{video.views}</div>
          </div>
        </div>
        <div className="bg-white pt-[0.65rem] pl-[0.90rem] pr-[0.90rem] pb-[0.65rem]">
          <span className="text-[16px] text-[#222] font-normal">
            Publicado el {video.uploadedAt}
            
          </span>
          <p>{video.description}</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col bg-white">
        <div className="bg-white p-4 flex flex-col gap-2">
          {youtubeData.map((project, i) => (
            <div key={i} className="flex gap-2 w-[100%] group">
           
          
              <Link className="relative h-[68px]" href={`/video/${project.id}`}>
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
                <Link href={`/video/${project.id}`} className="flex flex-col">
                  <h2 className="text-black font-medium text-[13px] group-hover:text-[#167ac6] bold">
                    {project.title}
                  </h2>
                  <div className="text-[11px] text-[#767676]">De loops</div>
                  <div className="text-[11px] text-[#767676]">
                    Hecho el {project.date}
                  </div>
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
