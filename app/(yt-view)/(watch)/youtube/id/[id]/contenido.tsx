import { Suspense } from "react"
import ytsr from "ytsr"
import SeccionRecomendados from "./recomendados"
import dynamic from "next/dynamic"
import Head from "next/head"

async function search(search: string) {
    console.log("TARDO", search)
    const searchResult = await ytsr.getFilters(search)
    console.log("YANO")
    const f = searchResult.get("Type")?.get("Video")
    const a = await ytsr(f!.url!, { pages: 1 })
    console.log(f!.url)
    return a.items as ytsr.Video[]
}



export default async function Contenido({props, params}:any) {
    // console.log(props)
    
    let videos: ytsr.Video[];

    // if (props.params.id) {
    //     if (props.video) {
    //         videos = [props.video]
    //     } else {
    //         const querySearchResult = await search(decodeURIComponent(props.params.id))
    //         // console.log(querySearchResult)
    //         videos = querySearchResult
    //         recomendados = querySearchResult
    //     }
    // } else {
        const idSearchResult = await search(`https://youtube.com/watch?v=${decodeURIComponent(props.params.id)}`)
        // console.log(idSearchResult)
        videos = idSearchResult
        // recomendados =  await search(decodeURIComponent(video.title))
    // }
    return (

        <>
        {/* <Head>
            <title>{}</title>
        </Head> */}
        {/* <div className="lg:w-[854px] flex flex-col gap-[0.65rem]">
       
            <div className="" >
                
                    <iframe
                        src={`https://www.youtube.com/embed/${props.params.id|| videos[0].id}?autoplay=1&mute=0`}
                        width="100%"
                        height={510}
                        name="myIFrame"
                        allowFullScreen
                        allow="autoplay; encrypted-media"
                    ></iframe>
                
            </div> */}
                <div className="bg-white pt-[0.65rem] pl-[0.90rem] pr-[0.90rem]">
                    <span className="text-[24px] text-[#222] font-normal">
                        {videos[0].title}
                    </span>
                    <div className="flex">
                        <div className="flex">
                            <div></div>
                            <div></div>
                        </div>
                        <div className="ml-auto">{videos[0].views}</div>
                    </div>
                </div>
                <div className="bg-white pt-[0.65rem] pl-[0.90rem] pr-[0.90rem] pb-[0.65rem]">
                    <span className="text-[16px] text-[#222] font-normal">
                        {videos[0].uploadedAt}

                    </span>
                    <p>{videos[0].description}</p>
                </div>
        {/* </div> */}
        {/* <div className="flex-1 flex flex-col bg-white">
            <DynamicRecomendados recomendados={recomendados} tituloVideoRaiz={videos[0].title} />
        </div> */}
        </>
    )
}

