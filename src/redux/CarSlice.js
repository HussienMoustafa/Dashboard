import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carsData: null,
  target: "",
};

const CarSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    updateCars(state, action) {
      console.log(action.payload);
      state.carsData = action.payload;
    },
    updateTarget(state, action) {
      console.log(action.payload);
      state.target = action.payload;
    },
  },
});

export const { updateCars, updateTarget } = CarSlice.actions;

export default CarSlice.reducer;
