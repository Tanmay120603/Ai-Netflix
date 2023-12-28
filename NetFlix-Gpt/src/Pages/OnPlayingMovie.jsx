import MovieTrailer from "../components/MovieTrailer"
import PlayingMovieDesc from "../components/PlayingMovieDesc"

function OnPlayingMovie({playingMovieData}){
    return(
        <div>
            <MovieTrailer {...playingMovieData}></MovieTrailer>
            <PlayingMovieDesc {...playingMovieData}></PlayingMovieDesc>
        </div>
    )
}

export default OnPlayingMovie