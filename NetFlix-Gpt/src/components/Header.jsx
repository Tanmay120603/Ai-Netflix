import { onAuthStateChanged, signOut } from "firebase/auth"
import { useDispatch, useSelector } from "react-redux"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import {addUser,removeUser} from "../utils/userDetailsSlice"
import { useEffect, useState } from "react"
import { logoImage } from "../utils/constants"

function Header(){
    const userDetailsObj=useSelector((state)=>state.userDetailsObj)
    const navigate=useNavigate()
    const dispatch=useDispatch()

    function handleSignOut(){
        signOut(auth).then(()=>navigate("/")).catch(error=>console.log(error))
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

    return (
        <div className="absolute bg-gradient-to-b from-black w-[100%] flex z-10 justify-between items-center">
        <img src={logoImage} alt="logo-image" className="w-44"></img>
        {userDetailsObj && <div className="flex gap-2 items-center">
        <img src={userDetailsObj.photoURL} className="w-8 cursor-pointer" alt="avatar-image" />
        <p className="text-white font-mono">{userDetailsObj.displayName}</p>
        <button onClick={handleSignOut} className="cursor-pointer bg-red-500 text-white px-3 py-1 rounded mx-2">Sign Out</button>
        </div>
        }
        </div>
    )
}

export default Header