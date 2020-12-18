import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserData {
  id: string;
  email: string;
  token: string;
}

export interface UserStates {
  userData?: UserData;
  isLoggedIn: boolean;
}

const initialState: UserStates = {
  isLoggedIn: false,
};

export const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<UserData>) {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});
