import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import filterReducer from './filterSlice';
import movieReducer from './movieSlice';

export const store = configureStore({
  reducer: {
    searchSlice: searchReducer,
    filters: filterReducer,
    moviesList: movieReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
