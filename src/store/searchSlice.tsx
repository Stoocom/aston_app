import { createSlice } from "@reduxjs/toolkit";

// Начальное значение
const initialState = {
  value: '',
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
      setSearchValue: (state, action) => {
        state.value = action.payload;
      },
    },
  });
  
  export const { setSearchValue } = searchSlice.actions;
  export default searchSlice.reducer;