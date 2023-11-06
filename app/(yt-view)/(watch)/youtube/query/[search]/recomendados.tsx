import Link from "next/link"
import ytsr from "ytsr"

async function search(search: string) {
    console.log("TARDO", search)
    const searchResult = await ytsr.getFilters(search)
    console.log("YANO")
    const f = searchResult.get("Type")?.get("Video")
    const a = await ytsr(f!.url!, {pages:1})
    console.log(f!.url)
    return a.items as ytsr.Video[]
}

const SeccionRecomendados = async (props: any) => {

    // console.log(props.recomendados.length)
    let recomendados: ytsr.Video[] = [];

    if (props.recomendados.length !== 0) {
        recomendados = props.recomendados
    } else {
        recomendados = await search(decodeURIComponent(props.tituloVideoRaiz))
    }
    return (
    <div className="bg-white p-4 flex flex-col gap-2 shadow-[0_1px_2px_rgba(0,0,0,.1)] ">
    
    {recomendados.filter(project => project.title !== "Shorts").map((project, i) => (
      <div key={i} className="flex gap-2 w-[100%] group">
     
    
        <Link className="relative h-[68px]" href={`/youtube/id/${project.id}`} >
          <div className="z-20">
            <img
              className="ai hover:z-[2] z-20"
              src={project.bestThumbnail?.url || ""}
              width={120}
              height={68}
              alt=""
              style={{ height: 68, minWidth: 120, objectFit: "cover" }}
            />
          </div>
          <span className="opacity-75 text-[11px] absolute z-1 bottom-[1px] h-[14px] leading-[14px] font-medium right-[1px] inline-block aling-top m-0 bg-black text-white p-[0_4px]">
            {project.duration}
          </span>
        </Link>

        <div className="flex flex-col">
          <Link href={`/youtube/id/${project.id}`} className="flex flex-col">
            <h2 className="text-black font-medium text-[13px] group-hover:text-[#167ac6] bold">
              {project.title}
            </h2>
            <div className="text-[11px] text-[#767676]">De {project.author?.name}</div>
            <div className="text-[11px] text-[#767676]">
              {project.uploadedAt}
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
    )
}

export default SeccionRecomendados