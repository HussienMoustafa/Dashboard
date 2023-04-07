import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userEmail: null,
  userName: null,
  userId: null,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setActiveUser(state, action) {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.userId = action.payload.userId;
      state.isLoggedIn = true;
    },
    setInActiveUser(state) {
      state.userName = null;
      state.userEmail = null;
      state.userId = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setActiveUser, setInActiveUser } = auth.actions;

export default auth.reducer;
