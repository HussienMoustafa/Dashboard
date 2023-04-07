import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const searchSlice = createSlice({
  name: "Search",
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
export const { increment, decrement } = searchSlice.actions;

export default searchSlice.reducer;
