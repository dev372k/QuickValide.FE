// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './services/userSlice';
import appReducer from './services/appSlice';
import builderReducer from './services/builderSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        app: appReducer,
        builder: builderReducer,
    },
});

export default store;
