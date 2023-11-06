import { Suspense } from "react";
import ytsr from "ytsr";
import SeccionRecomendados from "./recomendados";
import dynamic from "next/dynamic";
import Head from "next/head";
import SubscribeButtonIcon from "@/assets/subscribe_button.png";
import Image from "next/image";
async function search(search: string) {
  console.log("TARDO", search);
  const searchResult = await ytsr.getFilters(search);
  console.log("YANO");
  const f = searchResult.get("Type")?.get("Video");
  const a = await ytsr(f!.url!, { pages: 1 });
  console.log(f!.url);
  return a.items as ytsr.Video[];
}

export default async function Contenido({ props, params }: any) {

  let videos: ytsr.Video[];

  const idSearchResult = await search(
    `https://youtube.com/watch?v=${decodeURIComponent(props.params.id)}`
  );
  videos = idSearchResult;

  return (
    <>

      <div className="bg-white pt-[0.65rem] pl-[0.90rem] pr-[0.90rem] pb-[0.65rem] flex flex-col gap-2 shadow-[0_1px_2px_rgba(0,0,0,.1)]">
        <span className="text-[24px] text-[#222] font-normal">
          {videos[0].title}
        </span>
        <div className="flex">
          <div className="flex gap-[0.6rem]">
            <img
              width={48}
              height={48}
              src={videos[0].author?.bestAvatar?.url!}
            />
            <div className="flex flex-col gap-[0.6rem]">
              <a className="text-[13px] p-0 leading-[12px] font-medium">
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

    </>
  );
}
