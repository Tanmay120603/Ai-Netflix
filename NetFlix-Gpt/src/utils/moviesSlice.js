import {createSlice} from "@reduxjs/toolkit"

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        mainMoviePlaying:false,
        topRatedMovies:null,
        upcomingMovies:null,
        popularMovies:null,
        nowPlayingMovies:null,
        trailer:null,
        playingMovie:null
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
        setPlayingMovie:function(state,action){
            state.playingMovie=action.payload
        }
        ,
        toggleMainMoviePlaying:function(state,action){
            state.mainMoviePlaying=action.payload
        }
    }
})

export const {addNowPlayingMovies,addTopRatedMovies,addPopularMovies,addUpcomingMovies,setPlayingMovie,toggleMainMoviePlaying,addTrailer}=moviesSlice.actions

export default moviesSlice.reducer