import { useDispatch } from "react-redux"
import { posterCdnLink } from "../utils/constants"
import { setPlayingMovie, toggleMainMoviePlaying } from "../store/moviesSlice"

function MovieCard({id,poster_path,title,overview,vote_average,vote_count}){

    const dispatch=useDispatch()

    if(!poster_path)return

    function handleMoviePlaying(){
        dispatch(setPlayingMovie({id,poster_path,title,overview,vote_average,vote_count}))
        dispatch(toggleMainMoviePlaying(true))
    }

    return(
        <div onClick={handleMoviePlaying} className="px-1 relative cursor-pointer transition-transform hover:scale-90">
            <img src={posterCdnLink+poster_path} className="w-40" alt={title} />
        </div>
    )
}

export default MovieCard