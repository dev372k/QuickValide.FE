import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	appId: +localStorage.getItem("selectedApp") || null,
	seo: null,
	waitlist: null,
	apps: [],
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		changeApp: (state, action) => {
			state.appId = action.payload;
		},
		updateSeo: (state, action) => {
			state.seo = action.payload;
		},
		updateWaitlist: (state, action) => {
			state.waitlist = action.payload;
		},
		updateApps: (state, action) => {
			state.apps = action.payload;
		},
        resetAll: (state, action) => {
            state.appId = null
            state.apps = null
            state.waitlist = null
            state.seo = null
        }
	},
});

export const { changeApp, updateSeo, updateWaitlist, updateApps, resetAll } =
	appSlice.actions;
export default appSlice.reducer;
