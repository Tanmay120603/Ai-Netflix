import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom"
import RootLayout from "../layout/RootLayout"
import { LoginPage,BrowsePage } from "../Pages" 

function Body(){

    const appRouter=createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<RootLayout></RootLayout>}>
            <Route index element={<LoginPage></LoginPage>}></Route>
            <Route path="/browse" element={<BrowsePage></BrowsePage>}></Route>
        </Route>
    ))
    return(
        <RouterProvider router={appRouter}/>
    )
}

export default Body
