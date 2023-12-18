import { useSelector } from "react-redux"
import useMovieTrailer from "../hooks/useMovieTrailer"

function MovieTrailer({id}){
    const trailerObj=useSelector((state)=>state.moviesDetails.trailer)
    useMovieTrailer(id)
    return(
        <div>
            {/* <iframe  src={`http://www.youtube.com/embed/${trailerObj?.key}?autoplay=1&loop=1&mute=1`} title="YouTube video player"></iframe> */}
            <iframe className="w-[100%] h-screen" src={`https://www.youtube.com/embed/${trailerObj?.key}?autoplay=1&mute=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}

export default MovieTrailer