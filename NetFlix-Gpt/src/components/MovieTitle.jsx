import {FaPlay} from "react-icons/fa"
import {IoMdInformationCircle} from "react-icons/io"

function MovieTitle({original_title,overview}){
    return(
        <div className="flex flex-col gap-3 pt-[18%] pl-16 absolute w-[100%] h-screen bg-gradient-to-r from-slate-950 text-white">
            <h1 className="font-bold text-4xl">{original_title}</h1>
            <p className="w-4/12">{overview}</p>
            <div className="flex gap-2">
                <button className="px-8 py-2 bg-gray-400 hover:bg-gray-600 text-white rounded flex gap-1 items-center"><FaPlay></FaPlay>Play</button>
                <button className="px-7 py-2 bg-gray-400 hover:bg-gray-600 text-white rounded flex gap-1 items-center"><IoMdInformationCircle size={22}></IoMdInformationCircle>More Info</button>
            </div>
        </div>
    )
}
export default MovieTitle