import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    searchSlice: searchReducer,
    filters: filterReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
