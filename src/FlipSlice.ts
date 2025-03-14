import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: boolean;
}

const initialState = { value: false } as CounterState;

const flipSlice = createSlice({
  name: "flip",
  initialState,
  reducers: {
    flip: (state) => {
      state.value = !state.value;
    },
  },
});

export const { flip } = flipSlice.actions;
export default flipSlice.reducer;
