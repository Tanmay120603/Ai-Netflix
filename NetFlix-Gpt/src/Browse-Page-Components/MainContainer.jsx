import { useSelector } from "react-redux"
import MovieTitle from "./MovieTitle"
import MovieTrailer from "../Reusable-Components/MovieTrailer"

function MainContainer(){
    const moviesRelatedData=useSelector((state)=>state.moviesDetails)
    if(!moviesRelatedData.nowPlayingMovies) return
    const movie=moviesRelatedData.nowPlayingMovies[3]
    
    return(
        <div>
            {!moviesRelatedData.mainMoviePlaying && <MovieTitle {...movie}></MovieTitle>}
            <MovieTrailer {...movie}></MovieTrailer>
        </div>
    )
}

export default MainContainer