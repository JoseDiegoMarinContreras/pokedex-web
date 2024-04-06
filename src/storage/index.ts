import { configureStore, } from '@reduxjs/toolkit';
import AppStateReducer from './app-state';
import FavouritePokemonsReducer from './pokemon-fav';

const Storage = configureStore({
    reducer: {
        appState: AppStateReducer,
        favouritePokemons: FavouritePokemonsReducer,
    }
});

export default Storage;
