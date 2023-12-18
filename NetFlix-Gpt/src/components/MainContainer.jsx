import { useSelector } from "react-redux"
import MovieTitle from "./MovieTitle"
import MovieTrailer from "./MovieTrailer"

function MainContainer(){
    const movies=useSelector((state)=>state.moviesDetails.nowPlayingMovies)
    if(!movies) return
    const movie=movies[3]

    return(
        <div>
            <MovieTitle {...movie}></MovieTitle>
            <MovieTrailer {...movie}></MovieTrailer>
        </div>
    )
}

export default MainContainer