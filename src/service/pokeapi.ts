const nextPageDate = async (pageNumber: number) => {
    const offset = 20 * pageNumber;
    const limit = pageNumber !== 8 ? 20 : 11;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
    const data = await response.json();

    return data.results;
}

const getPokemon = async (name: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    
    return data;
}

export {
    nextPageDate,
    getPokemon,
};