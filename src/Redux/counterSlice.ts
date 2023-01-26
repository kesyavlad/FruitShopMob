import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from './store';
interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 1,
};
export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      if (state.value > 1) {
        state.value -= 1;
      }
    },
    backToOne: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});
export const {increment, decrement, backToOne} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
