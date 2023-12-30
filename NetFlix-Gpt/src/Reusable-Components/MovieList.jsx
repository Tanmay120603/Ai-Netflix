import MovieCard from "../Browse-Page-Components/MovieCard"

function MovieList({movies,title}){

    if(movies.length==0)return

    return(
        <div className="w-[100%] overflow-x-scroll">
        <h1 className="text-white text-2xl font-mono mb-1">{title}</h1>
        <div className="w-[800%] md:w-[400%] lg:w-[320%] xl:w-[220%] flex ml-6">
        {movies.map(individualMovie=><MovieCard key={individualMovie.id} {...individualMovie}></MovieCard>)}
        </div>
        </div>
    )
}

export default MovieList