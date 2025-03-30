import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  genre: string;
  country: string;
}

const initialState: FilterState = {
  genre: '',
  country: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setCountry:(state, action: PayloadAction<string>) => {
      state.country = action.payload;
    }
  },
});

export const { setGenre, setCountry} = filterSlice.actions;
export default filterSlice.reducer;
