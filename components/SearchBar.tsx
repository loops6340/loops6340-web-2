"use client"

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import Button from "./Button"
// import Calendar from "react-calendar"
import { useRouter } from "next/navigation";
// type ValuePiece = Date | null;
// import Modal from 'react-modal';
// type Value = ValuePiece | [ValuePiece, ValuePiece];


// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//     },
// };

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('body');


const SearchBar = () => {
 



    const [busqueda, setBusqueda] = useState("")
    const [id, setId] =  useState("")
    

    const router = useRouter()
    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log("HOLAAA HUMANOS XD")
               
                // const response = await fetch(`/api/youtube/${busqueda}`)
                // const json = await response.json()
                router.push(`/youtube/query/${encodeURIComponent(busqueda)}`)
                // router.
            }} className="flex">
                <input 
                    type="text" 
                    className="h-[100%] w-[100%] lg:w-[584px]" 
                    // placeholder="busca" 
                    value={busqueda} 
                    onChange={(e) => {
                        setBusqueda(e.currentTarget.value)
                    }}
                />
                <Button
                    disabled={!Boolean(busqueda)}
                >
                    <span className="bg-no-repeat bg-[url(https://web.archive.org/web/20150611000903im_/https://s.ytimg.com/yts/imgbin/www-hitchhiker-vfldzd94_.png)] bg-search w-[14px] h-[14px] block text-center mr-[0.95rem] ml-[0.95rem] opacity-[.6]"></span>
                </Button>
            </form>
            <div style={{
                position: "relative"
            }}
                className="ml-3 mr-3"
            >


            </div>
        </>
    )
}

export default SearchBar