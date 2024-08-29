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
    pricing: [],
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
            state.email = action.payload.email;
            state.playstoreLink = action.payload.playstoreLink;
            state.appstoreLink = action.payload.appstoreLink;
        },
        updateLogo: (state, action) => {
            state.logo = action.payload;
        },
        updatePricings: (state, action) => {
            state.pricing = action.payload;
        },
    },
});

export const {
    updateHero,
    updateAboutUs,
    appstoreLink,
    updateLogo,
    updateGeneralInfo,
    updatePricings,
} = builderSlice.actions;
export default builderSlice.reducer;
