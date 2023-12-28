import { useSelector } from "react-redux"
import Header from "../components/Header"
import MainContainer from "../components/MainContainer"
import SecondaryContainer from "../components/SecondaryContainer"
import useSpecifiedMovies from "../hooks/useSpecifiedMovies"
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from "../utils/moviesSlice"
import GptSearchPage from "./GptSearchPage"
import OnPlayingMovie from "./OnPlayingMovie"

function BrowsePage(){

    const {gptSearch,moviesDetails}=useSelector((state)=>state)
    const showGptSearch=gptSearch.showGptSearch
    const playingMovie=moviesDetails.playingMovie

    useSpecifiedMovies("https://api.themoviedb.org/3/movie/now_playing?page=1",addNowPlayingMovies)
    useSpecifiedMovies("https://api.themoviedb.org/3/movie/popular?page=1",addPopularMovies)
    useSpecifiedMovies("https://api.themoviedb.org/3/movie/top_rated?page=1",addTopRatedMovies)
    useSpecifiedMovies("https://api.themoviedb.org/3/movie/upcoming?page=1",addUpcomingMovies)

    if(playingMovie)return(<><Header/><OnPlayingMovie playingMovieData={playingMovie}/></>)

    return(
        <div>
            <Header></Header>
            {showGptSearch ? <GptSearchPage></GptSearchPage> 
            :<>
            <MainContainer></MainContainer>
            <SecondaryContainer></SecondaryContainer>
            </>
            }
        </div>
    )
}

export default BrowsePage