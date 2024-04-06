import { configureStore, } from '@reduxjs/toolkit';
import AppStateReducer from './app-state';

const Storage = configureStore({
    reducer: {
        appState: AppStateReducer,
    }
});

export default Storage;
