import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    logo: '',
    hero: {
        heading: 'Big Dreams Start with a Single Click, Start Now',
        description: '',
    },
    aboutUs: {
        text: 'About us text would go here',
    },
    logo: '',
    email: '',
    playstoreLink: '',
    appstoreLink: '',
};

const builderSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateHero: (state, action) => {
            state.hero.heading = action.payload.heroHeading;
            state.hero.description = action.payload.heroDescription;
        },
        updateAboutUs: (state, action) => {
            state.aboutUs.text = action.payload;
        },
        updateGeneralInfo: (state, action) => {
            state.logo = action.payload.logo;
            state.email = action.payload.email;
            state.playstoreLink = action.payload.playstoreLink;
            state.appstoreLink = action.payload.appstoreLink;
        },
    },
});

export const { updateHero, updateAboutUs, appstoreLink } = builderSlice.actions;
export default builderSlice.reducer;
