import { youtubeData } from "@/app/watch-data";
import VideoThumbnail from "@/components/VideoThumbnail";
import Link from "next/link";
import { NextResponse } from "next/server";
import ytsr from 'ytsr'
import SeccionRecomendados from "./recomendados";
import { Suspense } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

async function search(search: string) {
    console.log("TARDO", search)
    console.time()
    const searchResult = await ytsr.getFilters(search)
    console.log(searchResult)
    console.log("YANO")
    const f = searchResult.get("Type")?.get("Video")
    const a = await ytsr(f!.url!, { pages: 1 })
    console.log(f!.url)
    console.timeEnd()
    return a.items as ytsr.Video[]
}
type Props = {
    params: { id: string, search: string }
    searchParams: { [key: string]: string | undefined }
  }
  const DynamicRecomendados = dynamic(() => import('./recomendados'), {
    loading: () => <div>LOADING</div>
  })

  // export const metadata = {
    const DynamicContenido = dynamic(() => import('./contenido'), {
    
    loading: () => <div>LOADING</div>
    })
//     other: {
//         "theme-color": "#43B581"
//     }
// }
export async function generateMetadata({searchParams, params}: Props): Promise<Metadata> {

    // const idSearchResult = await search(`https://youtube.com/watch?v=${decodeURIComponent(searchParams!.v!)}`)


    
    let videos: ytsr.Video[] = [];

    if (params.id) {
     
            const querySearchResult = await search(decodeURIComponent(params.id))
            // console.log(querySearchResult)
            videos = querySearchResult
        
    } else {
        // const idSearchResult = await search(`https://youtube.com/watch?v=${decodeURIComponent(searchParams.v)}`)
        // // console.log(idSearchResult)
        // videos = idSearchResult
        // recomendados =  await search(decodeURIComponent(video.title))
    }

    return {
            other: {
        "theme-color": "#43B581"
    },
        title: videos[0].title,
        alternates: {
            types: {
                "application/json+oembed": `https://www.youtube.com/oembed?format=json&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D${videos[0].id}`
            }
        },
        openGraph: {
            url: `https://youtube.com/watch?v=${videos[0].id}`,
            // title: videos[0].title,
            images: `https://i.ytimg.com/vi/${videos[0].id}/maxresdefault.jpg`,
            videos: {
                type: "text/html",
                url: `https://youtube.com/embed/${videos[0].id}`,
                height: 720,
                width: 1280,

            },
            type: "video.other",
            
        },
    }
}
export default async function Date(props: any) {

    return (
        <>
        

                   <div className="lg:w-[854px] flex flex-col gap-[0.65rem]">
       
            <div className="" >
                
                    <iframe
                        src={`https://www.youtube.com/embed/${props.params.id}?autoplay=1&mute=0`}
                        width="100%"
                        height={510}
                        name="myIFrame"
                        allowFullScreen
                        allow="autoplay; encrypted-media"
                    ></iframe>
                
            </div>
            {/* <Suspense> */}
            <DynamicContenido props={props}/>

            {/* </Suspense> */}

        </div>
           <div className="flex-1 flex flex-col bg-white">
           <DynamicRecomendados {...props} />

           </div>

        </>
    )
}
