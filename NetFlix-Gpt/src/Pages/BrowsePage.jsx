import Header from "../components/Header"
import MainContainer from "../components/MainContainer"
import SecondaryContainer from "../components/SecondaryContainer"
import useSpecifiedMovies from "../hooks/useSpecifiedMovies"
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from "../utils/moviesSlice"

function BrowsePage(){
    useSpecifiedMovies("https://api.themoviedb.org/3/movie/now_playing?page=1",addNowPlayingMovies)
    useSpecifiedMovies("https://api.themoviedb.org/3/movie/popular?page=1",addPopularMovies)
    useSpecifiedMovies("https://api.themoviedb.org/3/movie/top_rated?page=1",addTopRatedMovies)
    useSpecifiedMovies("https://api.themoviedb.org/3/movie/upcoming?page=1",addUpcomingMovies)

    return(
        <div>
            <Header></Header>
            <MainContainer></MainContainer>
            <SecondaryContainer></SecondaryContainer>
        </div>
    )
}

export default BrowsePage