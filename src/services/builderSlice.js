import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    hero: {
        heading: 'Big Dreams Start with a Single Click, Start Now',
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ea odio eveniet inventore tempora hic suscipit sequi dolore optio voluptatum, modi veniam amet. Corrupti voluptatem inventore saepe, expedita, ratione commodi obcaecati repellendus reprehenderit voluptatibus officiis esse enim.',
    },
};

const builderSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateHero: (state, action) => {
            state.hero.heading = action.payload.heroHeading;
            state.hero.description = action.payload.heroDescription;
        },
    },
});

export const { updateHero } = builderSlice.actions;
export default builderSlice.reducer;
