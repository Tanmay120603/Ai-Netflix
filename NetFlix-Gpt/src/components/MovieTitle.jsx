import {FaPlay} from "react-icons/fa"
import {IoMdInformationCircle} from "react-icons/io"
import { toggleMainMoviePlaying } from "../utils/moviesSlice"
import { useDispatch } from "react-redux"

function MovieTitle({original_title,overview}){

    const dispatch=useDispatch()

    function handlePlay(){
           dispatch(toggleMainMoviePlaying(true))
    }

    return(
        <div className="flex flex-col justify-center 2xl:mt-10 gap-3  pl-16 absolute w-[100%] h-screen bg-gradient-to-r from-slate-950 text-white">
            <h1 className="font-bold text-4xl">{original_title}</h1>
            <p className="hidden md:w-8/12 lg:w-6/12 xl:w-4/12 md:block">{overview}</p>
            <div className="flex gap-2">
                <button className="px-6 md:px-8 py-2 bg-gray-400 hover:bg-gray-600 text-white rounded flex gap-1 items-center" onClick={handlePlay}><FaPlay></FaPlay>Play</button>
                <button className="px-5 md:px-7 py-2 bg-gray-400 hover:bg-gray-600 text-white rounded flex gap-1 items-center"><IoMdInformationCircle size={22}></IoMdInformationCircle>More Info</button>
            </div>
        </div>
    )
}
export default MovieTitle