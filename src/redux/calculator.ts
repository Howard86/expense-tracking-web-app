// import { getCollection } from '@/redux/firebase';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface CalculatorProps {
  displayValue: string;
}

export interface Expense {
  category: string;
  name: string;
  date: string;
  displayValue: string;
}

const initialState: CalculatorProps = {
  displayValue: '',
};

const submit = createAsyncThunk<boolean, string>(
  'calculator/submit',
  async (displayValue) => {
    const value = parseInt(displayValue, 10);
    if (isNaN(value)) {
      return false;
    }

    // const result = await getCollection(user.email, 'expense').add(values);

    return true;
  },
);

export const { actions, reducer } = createSlice({
  initialState,
  name: 'calculator',
  reducers: {
    clear() {
      return initialState;
    },
    type(state, action: PayloadAction<number>) {
      state.displayValue += action.payload.toString();
    },
    delete(state) {
      state.displayValue = state.displayValue.substr(
        0,
        state.displayValue.length - 1,
      );
    },
  },
  extraReducers: (builder) =>
    builder.addCase(submit.fulfilled, () => {
      actions.clear();
    }),
});
