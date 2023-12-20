import { IoMdCloseCircle, IoMdInformationCircle } from "react-icons/io"
import { posterCdnLink } from "../utils/constants"
import { useState } from "react"

function MovieCard({poster_path,title,overview}){

    const [showInfo,setShowInfo]=useState(false)

    function handleInfo(){
        setShowInfo(!showInfo)
    }

    return(
        <div className="px-1 relative cursor-pointer">
            {showInfo ? <IoMdCloseCircle onClick={handleInfo} size={20} className="text-white bg-black rounded-3xl z-10 absolute right-1"></IoMdCloseCircle> : <IoMdInformationCircle onClick={handleInfo} size={20} className="text-white z-10 bg-black rounded-3xl absolute right-1"></IoMdInformationCircle>}
            <img src={posterCdnLink+poster_path} className="w-40" alt={title} />
            {showInfo && <p className="absolute h-[100%] pt-5 text-center font-thin top-0 overflow-hidden bg-black text-white bg-opacity-80">{overview}</p>}
        </div>
    )
}

export default MovieCard