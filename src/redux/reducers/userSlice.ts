import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../api/types';

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
