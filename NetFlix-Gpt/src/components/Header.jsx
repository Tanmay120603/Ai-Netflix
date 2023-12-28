import { onAuthStateChanged, signOut } from "firebase/auth"
import { useDispatch, useSelector } from "react-redux"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import {addUser,removeUser} from "../utils/userDetailsSlice"
import { useEffect} from "react"
import { logoImage, supportedLanguages } from "../utils/constants"
import { setPlayingMovie, toggleMainMoviePlaying } from "../utils/moviesSlice"
import { addSuggestedMovieNamesAndResults, toggleShowGptSearchPage } from "../utils/gptSearchSlice"
import { changeLanguage } from "../utils/configSlice"
import { IoReturnUpBack } from "react-icons/io5"

function Header(){
    const {userDetailsObj,gptSearch,moviesDetails}=useSelector((state)=>state)
    const navigate=useNavigate()
    const dispatch=useDispatch()

    function handleSignOut(){
        if(gptSearch.showGptSearch){
            dispatch(toggleShowGptSearchPage())
        }
        signOut(auth).then(()=>{dispatch(toggleMainMoviePlaying(false))}).catch(error=>alert(error.message))
    }

    function handleShowGptPage(){
        dispatch(toggleShowGptSearchPage())
        dispatch(addSuggestedMovieNamesAndResults({suggestedMovieNames:null,suggestedMovieResults:null}))
        dispatch(changeLanguage("en"))
    }

    function handleLanguageChange(e){
        dispatch(changeLanguage(e.target.value))
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(user)=>{
            if(user){
                const {uid,email,displayName,photoURL}=user
                dispatch(addUser({uid,email,displayName,photoURL}))
                navigate("/browse")
            }
            else{
                dispatch(removeUser())
                navigate("/")
            }
        })
        return function(){
            unsubscribe()
        }
    },[])

    if(moviesDetails.playingMovie){
        return(
        <IoReturnUpBack onClick={()=>{
            dispatch(setPlayingMovie(null))
            dispatch(toggleMainMoviePlaying(false))
        }} className="absolute text-white mx-3 my-3 bg-black cursor-pointer" size={40}></IoReturnUpBack>
        )
    }

    return (
        <div className="absolute bg-gradient-to-b from-black w-[100%] flex z-10 justify-between items-center">
        <div className="flex gap-6 items-center"><img src={logoImage} alt="logo-image" className="w-44"></img>
        {gptSearch.showGptSearch && <select onChange={handleLanguageChange} className=" bg-slate-900 bg-opacity-50 cursor-pointer rounded text-white py-1 px-2">
            {supportedLanguages.map(language=><option key={language.identifier} value={language.identifier}>{language.name}</option>)}
        </select>}
        </div>
        {userDetailsObj && <div className="flex gap-2 items-center">
        <button className="text-white bg-purple-800 rounded py-2 px-4 mr-10" onClick={handleShowGptPage}>
            {gptSearch.showGptSearch ? "Home Page" : "Gpt Search"}
        </button>
        <img src={userDetailsObj.photoURL} className="w-8 cursor-pointer" alt="avatar-image" />
        <p className="text-white font-mono">{userDetailsObj.displayName}</p>
        <button onClick={handleSignOut} className="cursor-pointer bg-red-500 text-white px-3 py-1 rounded mx-2">Sign Out</button>
        </div>
        }
        </div>
    )
}

export default Header