import {createSlice} from "@reduxjs/toolkit"

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        mainMoviePlaying:false,
        topRatedMovies:null,
        upcomingMovies:null,
        popularMovies:null,
        nowPlayingMovies:null,
        trailer:null
    },
    reducers:{
        addNowPlayingMovies:function(state,action){
            state.nowPlayingMovies=action.payload
        },
        addPopularMovies:function(state,action){
            state.popularMovies=action.payload
        },
        addTopRatedMovies:function(state,action){
            state.topRatedMovies=action.payload
        },
        addUpcomingMovies:function(state,action){
            state.upcomingMovies=action.payload
        },
        addTrailer:function(state,action){
            state.trailer=action.payload
        },
        toggleMainMoviePlaying:function(state,action){
            state.mainMoviePlaying=!(state.mainMoviePlaying)
        }
    }
})

export const {addNowPlayingMovies,addTopRatedMovies,addPopularMovies,addUpcomingMovies,toggleMainMoviePlaying,addTrailer}=moviesSlice.actions

export default moviesSlice.reducer