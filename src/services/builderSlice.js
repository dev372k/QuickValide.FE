import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    logo: '',
    themeId: 1,
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
    svglink: '#ff0080',
    videolink: '',
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
            state.svglink = action.payload.svglink;
            state.videolink = action.payload.videolink;
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
        updateTheme: (state, action) => {
            state.themeId = action.payload;
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
    updateTheme,
} = builderSlice.actions;
export default builderSlice.reducer;
