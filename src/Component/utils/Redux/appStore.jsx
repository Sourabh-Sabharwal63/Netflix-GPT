import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './moviesSlice';
import GPTSliceReducer from './GPTSlice';
const appStore=configureStore({
  reducer:{
    movies:moviesReducer,
    GPTSlice:GPTSliceReducer,
  }
});
export default appStore;