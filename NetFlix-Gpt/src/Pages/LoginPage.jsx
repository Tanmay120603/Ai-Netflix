import { useRef, useState } from "react"
import Header from "../components/Header"
import {FaEye,FaEyeSlash} from "react-icons/fa" 
import { checkValidData } from "../utils/validateData"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "../utils/firebase"

function LoginPage(){

    const showPasswordEye=<FaEye className="absolute right-3 top-7 text-lg cursor-pointer" onClick={(e)=>setShowPassword(!showPassword)}></FaEye>
    const hidePassWordEye=<FaEyeSlash className="absolute right-3 top-7 text-lg cursor-pointer" onClick={(e)=>setShowPassword(!showPassword)} ></FaEyeSlash>

    const [showPassword,setShowPassword]=useState(false)
    const [isSignUp,setIsSignUp]=useState(false)
    const [errorMsg,setErrorMsg]=useState(null)

    const nameRef=useRef()
    const emailRef=useRef()
    const passwordRef=useRef()
   
    function toggleSignUp(){
        setIsSignUp(!isSignUp)
    }

    function handleSubmit(e){
        e.preventDefault()
        const message=checkValidData(nameRef.current?.value,emailRef.current.value,passwordRef.current.value,isSignUp)
        setErrorMsg(message)

        if(message) return

        if(isSignUp){
            //If user is doing sign up
            createUserWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value).then(
                (user)=>{
                    console.log(user)
                }
            ).catch(
                (error)=>{
                    setErrorMsg(error.message)
                }
            )
        }
        else{
            //if user is doing login process
            signInWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value).then(
                (user)=>{
                    console.log(user)
                }
            ).catch(
                (error)=>{
                    setErrorMsg("Invalid Credentials")
                }
            )
        }
    }

    return(
        <div className="relative">
            <Header></Header>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="banner-image"></img>
            <div className="absolute top-0 flex justify-center w-[100%] my-40">
            <form className="text-white bg-black bg-opacity-80 w-3/12 flex flex-col px-6 py-8" onSubmit={handleSubmit}>
                <h1 className="font-bold text-2xl">{isSignUp ? "Sign Up" : "Sign In"}</h1>
                {isSignUp && <input ref={nameRef} type="text" className="px-4 py-2 my-4 bg-slate-800" placeholder="Enter your Name" />}
                <input ref={emailRef} type="text" className="px-4 py-2 my-4 bg-slate-800" placeholder="Enter email address" />
                <div className="relative">
                <input ref={passwordRef} type={showPassword ? "text" : "password"} className="px-4 w-[100%] py-2 my-4 bg-slate-800" placeholder="Enter password" />
                {showPassword ? hidePassWordEye : showPasswordEye }
                </div>
                <p className="text-red-500 font-bold text-lg">{errorMsg}</p>
                <button className="bg-red-700 py-3 my-5 rounded">{isSignUp ? "Sign Up" : "Sign In" }</button>
                <p className="my-2"><span className="text-gray-500">{isSignUp ? "Already a user? " : "New to Netflix? "} </span><span className="cursor-pointer" onClick={toggleSignUp}>{isSignUp ? "Sign in now" :  "Sign up now"}</span></p>
            </form>
            </div>
        </div>
    )
}

export default LoginPage