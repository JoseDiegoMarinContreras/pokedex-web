import { getPokemonsWithDetails, } from '@services/pokeapi';
import { defer } from 'react-router-dom';

const initialListLoader = async (params) => {
    console.dir(params);
    return defer({
        pokemonListPromise: getPokemonsWithDetails(1),
    });
}

export {
    initialListLoader
};