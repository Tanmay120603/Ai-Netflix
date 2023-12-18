import Header from "../components/Header"
import MainContainer from "../components/MainContainer"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"

function BrowsePage(){
    useNowPlayingMovies()
    return(
        <div>
            <Header></Header>
            <MainContainer></MainContainer>
        </div>
    )
}

export default BrowsePage