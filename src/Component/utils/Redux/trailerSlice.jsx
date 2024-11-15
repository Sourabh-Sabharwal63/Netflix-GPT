import { createSlice } from "@reduxjs/toolkit";

const trailerSlice=createSlice({
  name:"trailer",
  initialState:{
    id:null,
     title:null,
     overview:null,
     poster_path:null,
     trailerKey:null
  },
  reducers:{
    addId:(state,action)=>{
      state.id=action.payload;
    },
    addTitle:(state,action)=>{
      state.title=action.payload;
    },
    addOverview:(state,action)=>{
      state.overview=action.payload;
    },
    addPoster_Path:(state,action)=>{
      state.poster_path=action.payload;
    },
    addTrailerKey:(state,action)=>{
      state.trailerKey=action.payload;
    }, 
  }
})

export const {addId,addOverview,addPoster_Path,addTitle,addTrailerKey}=trailerSlice.actions;
export default trailerSlice.reducer;
