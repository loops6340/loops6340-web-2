const Sidebar = () => {
  return (
    <div className="hidden lg:block w-[230px] bg-white p-[1.4rem] pt-[4rem]">
      <div className="bg-[#cc181e] text-[13px] font-medium p-1 pl-4 pr-4">
        <h2 className="text-white">309</h2>
      </div>
      {/* <br className="text-[black]"/> */}
      <div className="mt-2 border-t border-t-[#F1F1F1]">
        <h2 className="text-[#cc181e] text-[13px] mt-1 ml-2">Loops</h2>
        <div className="ml-3">
          <div className="text-[13px]">Proyectos</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
