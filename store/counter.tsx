import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./main";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    mutateValue: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const darkmodeActions = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
