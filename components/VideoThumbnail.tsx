import Link from "next/link"

type VideoThumbnailProps = {
    href: string,
    src: string,
    width: number,
    height: number
}

const VideoThumbnail = ({href, src, width, height}: VideoThumbnailProps) => {
  return (
    <Link
    className={`relative h-[${height}px] group`}
    href={href}
  >
    <div className="z-20">
      <img
        className="ai hover:z-[2] z-20"
        src={src}
        width={width}
        height={height}
        alt=""
        style={{ height: height, objectFit: "cover" }}
      />
    </div>
    <span className="opacity-75 group-hover:opacity-0 text-[11px] absolute z-1 bottom-[1px] h-[14px] leading-[14px] font-medium right-[1px] inline-block aling-top m-0 bg-black text-white p-[0_4px]">
      3:09
    </span>
  </Link>
  )
}

export default VideoThumbnail