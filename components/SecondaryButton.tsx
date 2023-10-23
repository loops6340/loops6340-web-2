const SecondaryButton: React.FC<{children: string}> = ({children}) => {
  return (

    <button
        className={`bg-[#167ac6] font-medium border-solid border border-[#167ac6] pl-[0.6rem] pr-[0.6rem] text-[11px] text-[white] items-center justify-center`}
    >
        {children}
    </button>

  )
}

export default SecondaryButton