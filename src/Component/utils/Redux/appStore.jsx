import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './moviesSlice';
import TitleImage from './TitleImageSlice'
const appStore=configureStore({
  reducer:{
    movies:moviesReducer,
    titleImage:TitleImage,
  }
});
export default appStore;