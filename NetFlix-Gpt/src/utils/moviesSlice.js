import {createSlice} from "@reduxjs/toolkit"

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailer:null
    },
    reducers:{
        addNowPlayingMovies:function(state,action){
            state.nowPlayingMovies=action.payload
        },
        addTrailer:function(state,action){
            state.trailer=action.payload
        }
    }
})

export const {addNowPlayingMovies,addTrailer}=moviesSlice.actions

export default moviesSlice.reducer