
type Button = { 
    children: React.ReactNode | string,
    onClick?: (e: any) => void,
    disabled?: boolean
}


const Button: React.FC<Button> = ({ children, onClick, disabled }) => {
    return (
        <button
            className={`bg-[#f8f8f8] font-medium border-solid border border-[#d3d3d3] pl-[0.62rem] pr-[0.62rem] text-[11px] text-[#333]`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button