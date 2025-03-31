import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileState } from '../types/profile';

const initialState: ProfileState = {
  auth: false
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },
  },
});

export const { setAuth } = profileSlice.actions;
export default profileSlice.reducer;
