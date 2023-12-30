import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        lang:"en",
        showMenuList:false
    },
    reducers:{
        changeLanguage:function(state,action){
            state.lang=action.payload
        },
        toggleShowMenuList:function(state){
            state.showMenuList=!state.showMenuList
        }
    }
})

export const {changeLanguage,toggleShowMenuList}=configSlice.actions

export const configReducer=configSlice.reducer