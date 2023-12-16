import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom"
import RootLayout from "../layout/RootLayout"
import { LoginPage,BrowsePage } from "../Pages" 
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userDetailsSlice"

function Body(){

    const dispatch=useDispatch()

    const appRouter=createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<RootLayout></RootLayout>}>
            <Route index element={<LoginPage></LoginPage>}></Route>
            <Route path="/browse" element={<BrowsePage></BrowsePage>}></Route>
        </Route>
    ))
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                const {uid,email,displayName}=user
                dispatch(addUser({uid,email,displayName}))
            }
            else{
                dispatch(removeUser())
            }
        })
    },[])
    return(
        <RouterProvider router={appRouter}/>
    )
}

export default Body
