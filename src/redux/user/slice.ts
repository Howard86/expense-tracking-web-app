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

const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin(state, action: PayloadAction<UserData>) {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    setLogout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const { setLogin, setLogout } = actions;
export default reducer;
