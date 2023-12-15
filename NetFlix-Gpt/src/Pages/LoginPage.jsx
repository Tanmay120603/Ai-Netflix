import { useState } from "react"
import Header from "../components/Header"
import {FaEye,FaEyeSlash} from "react-icons/fa" 

function LoginPage(){

    const [showPassword,setShowPassword]=useState(false)
    const showPasswordEye=<FaEye className="absolute right-3 top-7 text-lg cursor-pointer" onClick={(e)=>setShowPassword(!showPassword)}></FaEye>
    const hidePassWordEye=<FaEyeSlash className="absolute right-3 top-7 text-lg cursor-pointer" onClick={(e)=>setShowPassword(!showPassword)} ></FaEyeSlash>
    const [isSignUp,setIsSignUp]=useState(false)

    function handleSignUp(){
        setIsSignUp(!isSignUp)
    }

    return(
        <div className="relative">
            <Header></Header>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="banner-image"></img>
            <div className="absolute top-0 flex justify-center w-[100%] my-40">
            <form className="text-white bg-black bg-opacity-80 w-3/12 flex flex-col px-6 py-8">
                <h1 className="font-bold text-2xl">{isSignUp ? "Sign Up" : "Sign In"}</h1>
                {isSignUp && <input type="text" className="px-4 py-2 my-4 bg-slate-800" placeholder="Enter your Name" />}
                <input type="text" className="px-4 py-2 my-4 bg-slate-800" placeholder="Enter email address" />
                <div className="relative">
                <input type={showPassword ? "text" : "password"} className="px-4 w-[100%] py-2 my-4 bg-slate-800" placeholder="Enter password" />
                {showPassword ? hidePassWordEye : showPasswordEye }
                </div>
                <button className="bg-red-700 py-3 my-5 rounded">{isSignUp ? "Sign Up" : "Sign In" }</button>
                <p className="my-2"><span className="text-gray-500">{isSignUp ? "Already a user? " : "New to Netflix? "} </span><span className="cursor-pointer" onClick={handleSignUp}>{isSignUp ? "Sign in now" :  "Sign up now"}</span></p>
            </form>
            </div>
        </div>
    )
}

export default LoginPage