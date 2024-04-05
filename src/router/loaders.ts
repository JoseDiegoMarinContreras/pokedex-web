import { getPokemonsWithDetails, } from '@services/pokeapi';
import { defer } from 'react-router-dom';

const initialListLoader = async () => {
    return defer({
        pokemonListPromise: getPokemonsWithDetails(1),
    });
}

export {
    initialListLoader
};