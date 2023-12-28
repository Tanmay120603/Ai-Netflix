import { useSelector } from "react-redux"
import MovieList from "./MovieList"
import Loader from "./Loader"

function GptSuggestedList(){

    const {suggestedMovieNames,suggestedMovieResults,isSearchLoading}=useSelector((state)=>state.gptSearch)

    if(isSearchLoading){
        return <Loader></Loader>
    }

    if(!suggestedMovieNames) return

    return(
        <div className="bg-black bg-opacity-80 mt-10">
            {suggestedMovieNames.map((movieName,index)=><MovieList key={movieName} title={movieName} movies={suggestedMovieResults[index]}></MovieList>)}
        </div>
    )
}

export default GptSuggestedList