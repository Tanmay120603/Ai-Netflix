import MovieCard from "./MovieCard"

function MovieList({movies,title}){
    return(
        <div className="w-[100%] overflow-x-scroll">
        <h1 className="text-white text-2xl font-mono mb-1">{title}</h1>
        <div className="w-[220%] flex ml-6">
        {movies.map(individualMovie=><MovieCard key={individualMovie.id} {...individualMovie}></MovieCard>)}
        </div>
        </div>
    )
}

export default MovieList