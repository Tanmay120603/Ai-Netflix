import { posterCdnLink } from "../utils/constants"

function MovieCard({poster_path,title}){
    return(
        <div className="px-1 cursor-pointer">
            <img className="w-40" src={posterCdnLink+poster_path} alt={title} />
        </div>
    )
}

export default MovieCard