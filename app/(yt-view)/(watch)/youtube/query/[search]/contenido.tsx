import { Suspense } from "react";
import ytsr from "ytsr";
import SeccionRecomendados from "./recomendados";
import dynamic from "next/dynamic";
import Head from "next/head";
import Recomendados from "./recomendados";
import Image from "next/image";
import SubscribeButtonIcon from "@/assets/subscribe_button.png";
import Link from "next/link";

async function search(search: string) {
  console.log("TARDO", search);
  const searchResult = await ytsr.getFilters(search);
  console.log("YANO");
  const f = searchResult.get("Type")?.get("Video");
  const a = await ytsr(f!.url!, { pages: 1 });
  console.log(f!.url);
  return a.items as ytsr.Video[];
}

export async function Contenido({ props, params }: any) {
  let videos: ytsr.Video[];
  let recomendados: ytsr.Video[] = [];

  console.log(props.params);
  const idSearchResult = await search(decodeURIComponent(props.params.search));
  videos = idSearchResult;

  return (
    <>
      <div className="lg:w-[854px] flex flex-col gap-[0.65rem]">
        <div>
          <iframe
            className="aspect-video"
            src={`https://www.youtube.com/embed/${
              props.searchParams.v || videos[0].id
            }?autoplay=1&mute=0`}
            width="100%"
            name="myIFrame"
            allowFullScreen
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
        <div className="bg-white pt-[0.65rem] pl-[0.90rem] pr-[0.90rem] pb-[0.65rem] flex flex-col gap-2 shadow-[0_1px_2px_rgba(0,0,0,.1)]">
          <span className="text-[24px] text-[#222] font-normal">
            {videos[0].title}
          </span>
          <div className="flex">
            <div className="flex gap-[0.6rem]">
            <Link href={videos[0].author?.url!}>
              <img
                width={48}
                height={48}
                src={videos[0].author?.bestAvatar?.url!}
              />
            </Link>
              <div className="flex flex-col gap-[0.6rem]">
                <a href={videos[0].author?.url!} className="text-[13px] p-0 leading-[12px] font-medium">
                  {videos[0].author?.name}
                </a>
                <div className="flex pl-[1px]">
                  <a
                    className="flex gap-[0.38rem] rounded-l-[0.15rem] text-white bg-[#e62117] px-[6px] py-[5px] pb-[4.5px] text-[12px]"
                    href={videos[0].author?.url}
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
                    1,908,251
                  </span>
                </div>
              </div>
            </div>

            <div className="ml-auto mt-auto text-[19px]">{videos[0].views}</div>
          </div>
        </div>
        <div className="bg-white pt-[0.65rem] pl-[0.90rem] pr-[0.90rem] pb-[0.65rem] shadow-[0_1px_2px_rgba(0,0,0,.1)]">
          <span className="text-[16px] text-[#222] font-normal">
            {videos[0].uploadedAt}
          </span>
          <p>{videos[0].description}</p>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<script id="cid0020000360232089945" data-cfasync="false" async src="//st.chatango.com/js/gz/emb.js" style="width: 100%;height: 350px;">{"handle":"alfondohayposting","arch":"js","styles":{"b":100,"c":"000000","d":"000000","l":"FFFFFF","m":"FFFFFF","p":"10","r":100,"fwtickm":1}}</script>' as string,
          }}
          className="bg-white pt-[0.65rem] pl-[0.90rem] pr-[0.90rem] pb-[0.65rem] shadow-[0_1px_2px_rgba(0,0,0,.1)]"
        ></div>
      </div>
      <div className="flex-1 flex flex-col bg-white">
        <Suspense>
          <Recomendados
            recomendados={recomendados}
            tituloVideoRaiz={decodeURIComponent(props.params.search)}
          />
        </Suspense>
      </div>
    </>
  );
}
