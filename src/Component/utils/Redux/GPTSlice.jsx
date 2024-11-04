import { createSlice } from "@reduxjs/toolkit";

const GPTSlice=createSlice({
  name:"GPTSlice",
  initialState:{
    pageStatus:false,
    language:"eng",
    searchedList:null,
    searchWord:null,
  },
  reducers:{
    changePageStatus:(state)=>{
      state.pageStatus=!state.pageStatus;
    },
    changeLanguage:(state,action)=>{
      state.language=action.payload;
    },
    changeSearchedList:(state,action)=>{
      state.searchedList=action.payload;
    },
    changeSearchWord:(state,action)=>{
      state.searchWord=action.payload;
    }
  }
});

export const {changePageStatus,changeLanguage,changeSearchedList,changeSearchWord}=GPTSlice.actions;
export default GPTSlice.reducer;
