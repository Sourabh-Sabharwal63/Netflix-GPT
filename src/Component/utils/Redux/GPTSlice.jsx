import { createSlice } from "@reduxjs/toolkit";

const GPTSlice=createSlice({
  name:"GPTSlice",
  initialState:{
    pageStatus:false,
    language:"eng",
  },
  reducers:{
    changePageStatus:(state)=>{
      state.pageStatus=!state.pageStatus;
    },
    changeLanguage:(state,action)=>{
      state.language=action.payload;
    }
  }
});

export const {changePageStatus,changeLanguage}=GPTSlice.actions;
export default GPTSlice.reducer;
