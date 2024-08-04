// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./services/userSlice";
import appReducer from './services/appSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer
  },
});

export default store;
