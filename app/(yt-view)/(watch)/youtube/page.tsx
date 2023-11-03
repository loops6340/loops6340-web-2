import { youtubeData } from "@/app/watch-data";
import VideoThumbnail from "@/components/VideoThumbnail";
import Link from "next/link";
import { NextResponse } from "next/server";
import ytsr from 'ytsr'
import SeccionRecomendados from "./recomendados";
import { Suspense } from "react";
import { Contenido } from "./contenido";


export default async function Date(props: any) {

    return (
        <>
            <Suspense 
                fallback={
                    <div>   
                        
                    </div>
            }>
                 <Contenido props={props} />
            </Suspense>
        </>
    );
}
