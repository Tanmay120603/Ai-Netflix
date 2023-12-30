import {configureStore} from "@reduxjs/toolkit"
import userDetailsReducer from "./userDetailsSlice"
import moviesReducer from "./moviesSlice"
import { gptSearchReducer } from "./gptSearchSlice"
import { configReducer } from "./configSlice"

const appStore=configureStore(
    {
        reducer:{
            userDetailsObj:userDetailsReducer,
            moviesDetails:moviesReducer,
            gptSearch:gptSearchReducer,
            config:configReducer
        }
    }
)

export default appStore