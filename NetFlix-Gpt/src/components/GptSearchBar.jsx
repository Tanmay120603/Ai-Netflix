import { useDispatch, useSelector } from "react-redux"
import { languageTranslate } from "../utils/languageConstants"
import { useRef } from "react"
import { apiOptions, openAi } from "../utils/constants"
import { addSuggestedMovieNamesAndResults, changeIsSearchLoading } from "../utils/gptSearchSlice"

function GptSearchBar(){
    const selectedLang=useSelector(state=>state.config.lang)
    const searchFieldRef=useRef()
    const dispatch=useDispatch()

    async function fetchMovieFromTMDB(movieName){
       const response=await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,apiOptions)
       const data=await response.json()
       return data.results
    }

    async function handleGptSearch(e){
        e.preventDefault()
        dispatch(changeIsSearchLoading(true))
        const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchFieldRef.current.value +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
  
        const suggestedMovieNames = await openAi.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        })

        const suggestedMovieNamesArr=suggestedMovieNames['choices'][0]['message']['content'].split(",")

        const arrayOfPromises=suggestedMovieNamesArr.map(movieName=>fetchMovieFromTMDB(movieName))

        const tmdbResults=await Promise.all(arrayOfPromises)

        dispatch(addSuggestedMovieNamesAndResults({suggestedMovieNames:suggestedMovieNamesArr,suggestedMovieResults:tmdbResults}))

        dispatch(changeIsSearchLoading(false))
    }

    return (
        <div className="flex justify-center">
        <form className="bg-black mt-28 w-[90%] md:w-[50%] gap-4 p-4 flex flex-col md:flex-row">
            <input type="text" className=" w-[100%] md:w-[80%] p-2 rounded" placeholder={languageTranslate[selectedLang].searchTextFieldPlaceHolder} ref={searchFieldRef} />
            <button onClick={handleGptSearch} className="bg-red-700 text-white rounded py-2 px-4">{languageTranslate[selectedLang].search}</button>
        </form>
        </div>
    )
}

export default GptSearchBar