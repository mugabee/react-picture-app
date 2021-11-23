import { useState, useContext } from "react";

import { imagecontext } from "../context/contex";


const Header = () => {
    

const {searchPhotos, search, setSearch} = useContext(imagecontext)


    return (
        <div className="flex py-3 items-center justify-center ">
        <div className="flex border-2 border-gray-200 rounded">
            <input  onChange={(e)=>setSearch(e.target.value)} type="text" 
            className="px-4 text-black py-2 w-80" placeholder="Image Search..." 
            value={search}/>
            <button onClick={(e)=>searchPhotos(e, search)} className="px-4 text-white bg-gray-600 border-l ">
                Search 
            </button>
        </div>
    </div>
    )
}

export default Header
