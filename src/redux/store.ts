import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {},
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
