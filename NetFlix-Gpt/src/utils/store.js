import {configureStore} from "@reduxjs/toolkit"
import userDetailsReducer from "./userDetailsSlice"

const appStore=configureStore(
    {
        reducer:{
            userDetailsObj:userDetailsReducer
        }
    }
)

export default appStore