import {configureStore} from "@reduxjs/toolkit"
import userDetailsReducer from "./userDetailsSlice"
import moviesReducer from "./moviesSlice"

const appStore=configureStore(
    {
        reducer:{
            userDetailsObj:userDetailsReducer,
            moviesDetails:moviesReducer
        }
    }
)

export default appStore