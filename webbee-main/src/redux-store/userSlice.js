import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  isVerified: false,
  userId: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reduxLogIn: (state) => {
      state.isLoggedIn = true;
    },
    setUserId: (state, payload) => {
      state.userId = payload.payload;
    },
    reduxLogOut: (state) => {
      state.isLoggedIn = !true;
    },
    reduxIsVerifiedTrue: (state) => {
      state.isVerified = true;
    },
    reduxIsVerifiedFalse: (state) => {
      state.isVerified = !true;
    },
  },
});

export const {
  reduxLogIn,
  reduxLogOut,
  reduxSetUserId,
  reduxIsVerifiedFalse,
  reduxIsVerifiedTrue,
} = userSlice.actions;

export default userSlice.reducer;
