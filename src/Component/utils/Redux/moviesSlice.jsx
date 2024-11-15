import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice(
  {name:"movies",
    initialState:{
    nowPlayingMovies:null,
     PopularMovies:null,
      TopRated:null,
      TopRatedSer:null,
      AiringToday:null,
    },
    reducers:{
      addPlayingMovies:(state,action)=>{
       state.nowPlayingMovies=action.payload;
      },
      addPopularMovies:(state,action)=>{
        state.PopularMovies=action.payload;
       },
       addTopRated:(state,action)=>{
        state.TopRated=action.payload;
       },
       addTopRatedSer:(state,action)=>{
        state.TopRatedSer=action.payload;
       },
       addAiringToday:(state,action)=>{
        state.AiringToday=action.payload;
       },
     

    }
  }
);

export const {addPlayingMovies,addPopularMovies,addTopRated,addTopRatedSer,addAiringToday}=moviesSlice.actions;
export default moviesSlice.reducer; 
