import { useSelector } from "react-redux"
import MovieList from "./MovieList"

function SecondaryContainer(){
    const moviesDetails=useSelector(state=>state.moviesDetails)

    if(!moviesDetails.nowPlayingMovies || !moviesDetails.popularMovies || !moviesDetails.topRatedMovies || !moviesDetails.upcomingMovies)return

    return (
        <div className="-mt-16 bg-slate-950 relative z-20">
            <MovieList title={"Now Playing"} movies={moviesDetails.nowPlayingMovies}></MovieList>
            <MovieList title={"Upcoming Movies"} movies={moviesDetails.upcomingMovies}></MovieList>
            <MovieList title={"Popular"} movies={moviesDetails.popularMovies}></MovieList>
            <MovieList title={"Top Rated"} movies={moviesDetails.topRatedMovies}></MovieList>
        </div>
    )
}

export default SecondaryContainer