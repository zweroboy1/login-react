import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserCredential } from '../../types';

const initialState: UserCredential = {
  userId: '',
  email: '',
  accessToken: '',
  refreshToken: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserCredential>) => {
      state.userId = action.payload.userId;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logoutUser: (state) => {
      state.userId = '';
      state.email = '';
      state.accessToken = '';
      state.refreshToken = '';
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
