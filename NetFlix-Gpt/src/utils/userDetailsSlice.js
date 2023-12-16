import {createSlice} from "@reduxjs/toolkit"

const userDetailsSlice=createSlice({
    name:"userDetails",
    initialState:null,
    reducers:{
        addUser:function(state,action){
            return action.payload
        },
        removeUser:function(state,action){
            return null
        }
    }
})

export const {addUser,removeUser}=userDetailsSlice.actions

const userDetailsReducer=userDetailsSlice.reducer

export default userDetailsReducer