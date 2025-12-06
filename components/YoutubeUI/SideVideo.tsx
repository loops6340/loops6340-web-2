import Link from "next/link";
interface Props {
  key: number;
  title: string;
  date: string;
  href: string;
  thumbnail: string;
  author: string;
}
export default function SideVideo({ title, date, href, thumbnail, author }: Props) {
  return (
    <div className="flex gap-2 w-[100%] group">
      <Link className="relative h-[68px]" href={href}>
        <div className="z-20">
          <img
            className="ai hover:z-[2] z-20"
            src={thumbnail}
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
        <Link href={href} className="flex flex-col">
          <h2 className="text-black font-medium text-[13px] group-hover:text-[#167ac6] bold">
            {title}
          </h2>
          <div className="text-[11px] text-[#767676]">De {author}</div>
          <div className="text-[11px] text-[#767676]">Hecho el {date}</div>
        </Link>
      </div>
    </div>
  );
}
