import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { apiOptions } from "../utils/constants"

function useSpecifiedMovies(apiLink,action){

    const {nowPlayingMovies}=useSelector(state=>state.moviesDetails)

    async function getSpecifiedMovies(){
        const response=await fetch(apiLink,apiOptions)
        const data=await response.json()
        dispatch(action(data.results))
    }

    useEffect(()=>{
        if(!nowPlayingMovies)getSpecifiedMovies()
    },[])

    const dispatch=useDispatch()
}

export default useSpecifiedMovies