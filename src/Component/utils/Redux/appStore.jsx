import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './moviesSlice';
import TitleImage from './TitleImageSlice'
import GPTSliceReducer from './GPTSlice';
const appStore=configureStore({
  reducer:{
    movies:moviesReducer,
    titleImage:TitleImage,
    GPTSlice:GPTSliceReducer,
  }
});
export default appStore;