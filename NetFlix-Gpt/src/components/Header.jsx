import { onAuthStateChanged, signOut } from "firebase/auth"
import { useDispatch, useSelector } from "react-redux"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import {addUser,removeUser} from "../store/userDetailsSlice"
import { useEffect} from "react"
import { logoImage, supportedLanguages } from "../utils/constants"
import { setPlayingMovie, toggleMainMoviePlaying } from "../store/moviesSlice"
import { addSuggestedMovieNamesAndResults, toggleShowGptSearchPage } from "../store/gptSearchSlice"
import { changeLanguage, toggleShowMenuList } from "../store/configSlice"
import { IoReturnUpBack } from "react-icons/io5"

function Header(){
    const {userDetailsObj,gptSearch,moviesDetails,config}=useSelector((state)=>state)
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
        <>
        <div className="absolute bg-gradient-to-b from-black w-[100%] flex z-20 justify-between items-center">
        <div className="flex gap-0 md:gap-6 items-center"><img src={logoImage} alt="logo-image" className=" w-36 md:w-44"></img>
        {gptSearch.showGptSearch && <select onChange={handleLanguageChange} className=" bg-slate-900 bg-opacity-50 cursor-pointer rounded text-white py-1 px-2">
            {supportedLanguages.map(language=><option key={language.identifier} value={language.identifier}>{language.name}</option>)}
        </select>}
        </div>
        {userDetailsObj &&<div className="flex gap-2 items-center">
        <button className="text-white bg-purple-800 rounded py-2 px-4 mr-1 ml-1 md:ml-0 md:mr-10" onClick={handleShowGptPage}>
            {gptSearch.showGptSearch ? "Home" : "Gpt Search"}
        </button>
        <img src={userDetailsObj.photoURL} onClick={()=>dispatch(toggleShowMenuList())} className="w-8 mr-2 md:mr-0 cursor-pointer" alt="avatar-image" />
        <p className="text-white hidden md:block font-mono">{userDetailsObj.displayName}</p>
        <button onClick={handleSignOut} className="cursor-pointer hidden md:inline-block bg-red-500 text-white px-3 py-1 rounded mx-2">Sign Out</button>
        </div>
        }
        </div>
      {userDetailsObj && <div className="absolute right-2 pt-16 md:hidden z-10">
          <ul className={`bg-white py-2 px-2 ${config.showMenuList ? "block" : "hidden"} text-red-500`}>
              <li className="border-b-2 border-black">Welcome ! {userDetailsObj.displayName}</li>
              <li className="border-b-2 border-black cursor-pointer" onClick={handleSignOut}>Sign out</li>
          </ul>
      </div>
     }
      </>
    )
}

export default Header