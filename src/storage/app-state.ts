import { createSlice, } from '@reduxjs/toolkit';
import { Pokemon } from 'types/poke-api';

interface InitialState{
    pageNumber: number | null;
    controlsPosition: number[] | null;
    pageData: Pokemon[] | null;
}
const initialState: InitialState = {
    pageNumber: 1,
    controlsPosition:null,
    pageData: null
}

const slice = createSlice({
    name: 'app-state',
    initialState,
    reducers: {
        setAppState: (state, action) => {
            state.pageNumber = action.payload.pageNumber ?? state.pageNumber;
            state.controlsPosition = action.payload.controlsPosition ?? state.controlsPosition;
            state.pageData = action.payload.pageData ?? state.pageData;
        },
        resetAppState: (state) => {
            state = initialState;
        }
    }
});

export const { setAppState, resetAppState, } = slice.actions;

export default slice.reducer;