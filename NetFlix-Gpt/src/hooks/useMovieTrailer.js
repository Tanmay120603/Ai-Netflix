import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTrailer } from "../utils/moviesSlice"
import { apiOptions } from "../utils/constants"


function useMovieTrailer(id){

    async function getTrailer(){
    const response=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,apiOptions)
    const data=await response.json()
    const trailerData=data['results'].find(individualVideo=>individualVideo.type==="Trailer")
    const trailerToDispatch=trailerData ? trailerData : data['results'][0]
    dispatch(addTrailer(trailerToDispatch))
}

useEffect(()=>{
    getTrailer()
},[])


const dispatch=useDispatch()

}

export default useMovieTrailer 