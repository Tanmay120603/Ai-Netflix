import { useSelector } from "react-redux"
import useMovieTrailer from "../hooks/useMovieTrailer"

function MovieTrailer({id}){
    const {trailer,mainMoviePlaying}=useSelector((state)=>state.moviesDetails)
    useMovieTrailer(id)
    return(
        <div>
            <iframe className="w-[100%] h-screen" src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1${mainMoviePlaying ? "" : "&mute=1"}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}

export default MovieTrailer