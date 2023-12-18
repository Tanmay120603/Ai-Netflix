import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { apiOptions } from "../utils/constants"

function useNowPlayingMovies(){
    async function getNowPlayingMovies(){
        const response=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",apiOptions)
        const data=await response.json()
        dispatch(addNowPlayingMovies(data.results))
    }

    useEffect(()=>{
        getNowPlayingMovies()
    },[])

    const dispatch=useDispatch()
}

export default useNowPlayingMovies