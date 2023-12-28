import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice=createSlice({
    name:"gptSearch",
    initialState:{
        isSearchLoading:false,
        showGptSearch:false,
        suggestedMovieNames:null,
        suggestedMovieResults:null
    },
    reducers:{
        toggleShowGptSearchPage:function(state){
            state.showGptSearch=!state.showGptSearch
        },
        addSuggestedMovieNamesAndResults:function(state,action){
            const {suggestedMovieNames,suggestedMovieResults}=action.payload
            state.suggestedMovieNames=suggestedMovieNames
            state.suggestedMovieResults=suggestedMovieResults
        },
        changeIsSearchLoading:function(state,action){
            state.isSearchLoading=action.payload
        }
    }
})

export const {toggleShowGptSearchPage,addSuggestedMovieNamesAndResults,changeIsSearchLoading}=gptSearchSlice.actions

export const gptSearchReducer=gptSearchSlice.reducer