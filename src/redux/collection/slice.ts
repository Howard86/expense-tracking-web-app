import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Expense } from '@/components/ExpenseForm';

export interface CollectionStates {
  isFetched: boolean;
  expense: Expense[];
}

const initialState: CollectionStates = {
  isFetched: false,
  expense: [],
};

const { actions, reducer } = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    add(state, action: PayloadAction<Expense>) {
      state.expense = [action.payload, ...state.expense];
    },
    fetchFresh(state, action: PayloadAction<Expense[]>) {
      state.expense = action.payload;
    },
  },
});

export const { add, fetchFresh } = actions;
export default reducer;
