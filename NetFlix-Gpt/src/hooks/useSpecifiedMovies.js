import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { apiOptions } from "../utils/constants"

function useSpecifiedMovies(apiLink,action){
    async function getNowPlayingMovies(){
        const response=await fetch(apiLink,apiOptions)
        const data=await response.json()
        dispatch(action(data.results))
    }

    useEffect(()=>{
        getNowPlayingMovies()
    },[])

    const dispatch=useDispatch()
}

export default useSpecifiedMovies