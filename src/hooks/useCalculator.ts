import { useReducer } from 'react';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CalculatorState {
  displayValue: string;
}

interface UseCalculator {
  value: string;
  handleOnType: (input: string) => void;
  handleOnDelete: () => void;
  handleOnClear: () => void;
}

const initialState: CalculatorState = {
  displayValue: '',
};

const { actions, reducer } = createSlice({
  initialState,
  name: 'calculator',
  reducers: {
    clear() {
      return initialState;
    },
    set(state, action: PayloadAction<number>) {
      state.displayValue = action.payload.toString();
    },
    type(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case '.':
          if (state.displayValue.includes('.')) {
            return state;
          }

          if (state.displayValue === '') {
            state.displayValue += '0';
          }
          break;

        case '0':
        case '00':
          if (state.displayValue === '') {
            return state;
          }
          break;

        default:
          break;
      }
      state.displayValue += action.payload;
    },
    delete(state) {
      state.displayValue = state.displayValue.substr(
        0,
        state.displayValue.length - 1,
      );
    },
  },
});

const useCalculator = (initialValue = 0): UseCalculator => {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (initialValue > 0) {
    dispatch(actions.set(initialValue));
  }

  const handleOnType = (input: string) => dispatch(actions.type(input));
  const handleOnDelete = () => dispatch(actions.delete());
  const handleOnClear = () => dispatch(actions.clear());

  return {
    value: state.displayValue,
    handleOnType,
    handleOnDelete,
    handleOnClear,
  };
};

export default useCalculator;
