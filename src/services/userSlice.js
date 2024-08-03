import { createSlice } from "@reduxjs/toolkit";
import { getToken, decodeToken, setToken } from "../helpers/jwtHelper";

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
    refreshUser: (state, action) => {
      const token = getToken();
      const user = decodeToken(token);
      console.log(user);
      state.user = {};
    },
  },
});

export const { saveUser, logoutUser, refreshUser } = userSlice.actions;
export default userSlice.reducer;
