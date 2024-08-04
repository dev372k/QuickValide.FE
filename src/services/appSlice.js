import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appId: null,
  seo: null,
  waitlist: null,
  apps: []
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeApp: (state, action) => {
      state.appId = action.payload;

    },
    updateSeo: (state, action) => {
      state.seo = action.payload
    },
    updateWaitlist: (state, action) => {
      state.seo = action.payload
    },
    updateApps: (state, action) => {
      state.apps = action.payload
    }
  },
});

export const { changeApp, updateSeo, updateWaitlist, updateApps } = appSlice.actions;
export default appSlice.reducer;
