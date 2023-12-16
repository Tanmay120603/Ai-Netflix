import { signOut } from "firebase/auth"
import { useSelector } from "react-redux"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"

function Header(){
    const userDetailsObj=useSelector((state)=>state.userDetailsObj)
    const navigate=useNavigate()

    function handleSignOut(){
        signOut(auth).then(()=>navigate("/")).catch(error=>console.log(error))
    }

    return (
        <div className="absolute bg-gradient-to-b from-black w-[100%] flex justify-between items-center">
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo-image" className="w-44"></img>
        {userDetailsObj && <div>
        <p>{userDetailsObj.displayName}</p>   
        <p>{userDetailsObj.email}</p>
        <button onClick={handleSignOut} className="cursor-pointer bg-red-500 text-white px-3 py-1 rounded mx-2">Sign Out</button>
        </div>
        }
        </div>
    )
}

export default Header