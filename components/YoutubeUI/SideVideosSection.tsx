
const SideVideosSection = ({children}: {children: React.ReactNode}) => {
  return (
      <div className="flex-1 flex flex-col bg-white ">
        <div className="bg-white p-[0.95rem] pt-[0.75rem] flex flex-col gap-2 shadow-[0_1px_2px_rgba(0,0,0,.1)]">
          <div className="flex text-[14px] font-medium">
            <div>Up Next</div>
            <div className="flex gap-2 ml-auto">
              <div>Autoplay</div>
              <div className="pt-[0.15rem]">
                <span className="bg-autoplay-help bg-[url(/youtube-icons.png)] w-[16px] h-[16px] bg-[auto] block"></span>
              </div>
              <span>
                <input
                  id="autoplay-checkbox"
                  className="hidden peer"
                  type="checkbox"
                />
                <label
                  htmlFor="autoplay-checkbox"
                  className="mt-[0.20rem] rounded-full bg-[#B8B8B8] lbl inline-block w-[37px] h-[15px] relative cursor-pointer after:w-[15px] after:absolute after:h-[15px] after:bg-white after:rounded-full after:mt-[0px]  peer-checked:bg-[#167ac6] peer-checked:after:left-[22px]"
                ></label>
              </span>
            </div>
          </div>
          {children}
        </div>
      </div>
  )
}

export default SideVideosSection