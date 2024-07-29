// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./services/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
