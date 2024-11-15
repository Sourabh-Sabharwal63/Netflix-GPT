import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './moviesSlice';
import GPTSliceReducer from './GPTSlice';
import TrailerSlice from './trailerSlice'
const appStore=configureStore({
  reducer:{
    movies:moviesReducer,
    GPTSlice:GPTSliceReducer,
    trailerSlice:TrailerSlice,
  }
});
export default appStore;