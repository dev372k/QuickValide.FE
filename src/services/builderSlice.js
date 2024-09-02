import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    logo: '',
    pageContent: 'You are just a click to build great things',
    aboutUs: 'About us text will go here',
    pricing: JSON.stringify([
        {
            name: 'Basic',
            price: '5',
            features: [
                {
                    feature: 'Feature 1',
                    isIncluded: true,
                },
                {
                    feature: 'Feature 2',
                    isIncluded: false,
                },
                {
                    feature: 'Feature 3',
                    isIncluded: false,
                },
            ],
        },
        {
            name: 'Standard',
            price: '10',
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
                    isIncluded: false,
                },
            ],
        },
        {
            name: 'Premium',
            price: '25',
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
    style: {},
};

const builderSlice = createSlice({
    name: 'builder',
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
        updateStyle: (state, action) => {
            const updatedStyles = action.payload;
            state.style = updatedStyles;
        },
        updateApp: (state, action) => {
            return action.payload;
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
    updateStyle,
    updateApp,
} = builderSlice.actions;
export default builderSlice.reducer;
