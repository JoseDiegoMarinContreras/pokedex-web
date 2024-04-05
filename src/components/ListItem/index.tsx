import React from 'react';

interface ListItemProps {
    pokemon: unknown;
    onClick: (pokemon: unknown) => void
}

const ListItem = ({ pokemon, onClick } : ListItemProps) => {
    return (
        <li key={pokemon.name} onClick={(evt: React.MouseEvent<HTMLLIElement>) => {
            //onClick(pokemon);
            console.log(evt.detail);
        }}>{pokemon.name}</li>
    );
}

export default ListItem;