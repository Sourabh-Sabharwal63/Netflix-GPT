import { createSlice } from "@reduxjs/toolkit";

const TitleImageSlice=createSlice({
  name:"TitleImage",
  initialState:{
    imageData:null,
  },
  reducers:{
    addImageData:(state,action)=>{
      state.imageData=action.payload;
    }
  }

});

export const {addImageData} =TitleImageSlice.actions;
export default TitleImageSlice.reducer;