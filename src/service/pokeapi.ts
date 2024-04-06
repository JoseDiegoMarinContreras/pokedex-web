import { PokeApiResponse, Pokemon } from '../types/poke-api';
import { withJson } from '@utils';

const getPokemonById = async (id: number): Promise<Pokemon> => {
    const data = withJson(fetch(`https://pokeapi.co/api/v2/pokemon/${id}`));

    return data;
}

const getPokemonsWithDetails = async (pageNumber: number): Promise<Pokemon[]> => {
    const list = await pageList(pageNumber);
    const results = await Promise.all(
        list.results.map(
            (item) => withJson<Pokemon>(fetch(item.url))
        )
    ) as Pokemon[];

    const data = await new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, results);
    });
    
    return data;
}

const pageList = async (pageNumber: number): Promise<PokeApiResponse> => {
    const offset = 20 * (pageNumber - 1);
    const limit = pageNumber !== 8 ? 20 : 11;
    const response = await withJson<PokeApiResponse>(fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`));
    
    return response;
}

const getPokemon = async (name: string): Promise<Pokemon> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await withJson<Pokemon>(response.json());
    
    return data;
}

export {
    pageList,
    getPokemon,
    getPokemonsWithDetails,
    getPokemonById,
};