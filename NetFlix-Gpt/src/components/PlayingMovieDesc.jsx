import { posterCdnLink } from "../utils/constants"

function PlayingMovieDesc({title,poster_path,overview,vote_average,vote_count}){
    return(
        <div className="bg-black text-white mx-5 my-5 font-sans flex">
            <img src={posterCdnLink+poster_path} className="w-[400px]" alt="Poster Image" />
            <div className="flex flex-col justify-center gap-5 mx-10">
            <p className="font-bold font-serif text-5xl">{title}</p>
            <p className="text-lg">Story : {overview}</p>
            <p>IMDB Rating : {vote_average}</p>
            <p>IMDB Vote Counts : {vote_count}</p>
            </div>
            </div>
    )
}

export default PlayingMovieDesc