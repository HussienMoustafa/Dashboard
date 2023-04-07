import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const countLovesSlice = createSlice({
  name: "CountLoves",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = countLovesSlice.actions;

export default countLovesSlice.reducer;
