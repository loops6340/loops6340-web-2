import React from 'react'

function loading() {
  return (
  
    <>
    
    <div className="lg:w-[854px] flex flex-col gap-[0.65rem]">
        <div className="h-[480px]">
          
        </div>

        <div className="bg-white pt-[0.65rem] pl-[0.90rem] pr-[0.90rem]">
          <span className="text-[24px] text-[#222] font-normal">
            ...
          </span>
          <div className="flex">
            <div className="flex">
              <div></div>
              <div></div>
            </div>
            <div className="ml-auto">3,309</div>
          </div>
        </div>
        <div className="bg-white pt-[0.65rem] pl-[0.90rem] pr-[0.90rem]">
          <span className="text-[16px] text-[#222] font-normal">
            Publicado el ...
          </span>
          <p>.</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col bg-white">
        <div className="bg-white p-4 flex flex-col gap-2">
         
        </div>
      </div>
    </>

  )
}

export default loading