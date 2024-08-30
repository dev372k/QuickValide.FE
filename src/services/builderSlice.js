import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    logo: '',
    pageContent: 'You are just a click to build great things',
    aboutUs: 'About us text will go here',
    pricing: JSON.stringify([
        {
            name: 'Pricing 1',
            price: '0',
            features: [
                {
                    feature: 'Feature 1',
                    isIncluded: true,
                },
                {
                    feature: 'Feature 2',
                    isIncluded: true,
                },
                {
                    feature: 'Feature 3',
                    isIncluded: true,
                },
            ],
        },
        {
            name: 'Pricing 2',
            price: '0',
            features: [
                {
                    feature: 'Feature 1',
                    isIncluded: true,
                },
                {
                    feature: 'Feature 2',
                    isIncluded: true,
                },
                {
                    feature: 'Feature 3',
                    isIncluded: true,
                },
            ],
        },
        {
            name: 'Pricing 3',
            price: '0',
            features: [
                {
                    feature: 'Feature 1',
                    isIncluded: true,
                },
                {
                    feature: 'Feature 2',
                    isIncluded: true,
                },
                {
                    feature: 'Feature 3',
                    isIncluded: true,
                },
            ],
        },
    ]),
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
            state.pageContent = action.payload;
        },
        updateAboutUs: (state, action) => {
            state.aboutUs = action.payload;
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
        updateApp: (state, action) => {
            action.payload;
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
    updateApp,
} = builderSlice.actions;
export default builderSlice.reducer;
