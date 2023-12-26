import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice=createSlice({
    name:"gptSearch",
    initialState:{
        showGptSearch:false
    },
    reducers:{
        toggleShowGptSearchPage:function(state){
            state.showGptSearch=!state.showGptSearch
        }
    }
})

export const {toggleShowGptSearchPage}=gptSearchSlice.actions

export const gptSearchReducer=gptSearchSlice.reducer