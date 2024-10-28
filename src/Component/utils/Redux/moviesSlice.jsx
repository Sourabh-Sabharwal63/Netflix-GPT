import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice(
  {name:"movies",
    initialState:{
      nowPlayingMovies:null,
      VideoData:null,
    },
    reducers:{
      addPlayingMovies:(state,action)=>{
       state.nowPlayingMovies=action.payload;
      },
      addVideoData:(state,action)=>{
        state.VideoData=action.payload;
      }

    }
  }
);

export const {addPlayingMovies,addVideoData}=moviesSlice.actions;
export default moviesSlice.reducer; 
