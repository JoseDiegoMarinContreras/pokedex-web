import { createSlice, } from '@reduxjs/toolkit';
import { Pokemon } from 'types/poke-api';

interface InitialState{
    favPokemons: Pokemon[];
}
const initialState: InitialState = {
    favPokemons: [],
}

const slice = createSlice({
    name: 'pokemon-fav',
    initialState,
    reducers: {
        addNewFavPokemon: (state, action) => {
            state.favPokemons.push(action.payload.favPokemon);
        },
        removeFavPokemon: (state, action) => {
            const id = action.payload.id;
            state.favPokemons = state.favPokemons.filter((item) => {
                return item.id !== id;
            });
        }
    }
});

export const { addNewFavPokemon, removeFavPokemon, } = slice.actions;

export default slice.reducer;