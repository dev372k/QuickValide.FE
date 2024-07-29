import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.user = {};
      state.isAuthenticated = false;
    },
  },
});

export const { saveUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
