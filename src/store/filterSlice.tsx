import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  genre: string;
}

const initialState: FilterState = {
  genre: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
  },
});

export const { setGenre } = filterSlice.actions;
export default filterSlice.reducer;
