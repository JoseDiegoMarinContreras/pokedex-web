import { formatPokemonOrder, formatPokemonName, getTagColorByTypeName, } from '@utils'
import { Pokemon } from 'types/poke-api';
import './style.css';
import { MouseEvent } from 'react';
import Container from './Container';

interface ListItemProps {
    pokemon: Pokemon;
    onClick?: (pokemon: Pokemon) => void;
    onDoubleClick?: (pokemon: Pokemon) => void;
    key: any;
}

const ListItem = ({ pokemon, onClick, onDoubleClick, key } : ListItemProps) => {
    return (
        <Container className='maincontainer-li'
          key={key}
          onClick={() => onClick && onClick(pokemon)}
          onDoubleClick={() => onDoubleClick && onDoubleClick(pokemon)}
        >
            <img className='pokemon-image-li'
              alt={formatPokemonName(pokemon.name)}
              src={pokemon.sprites.front_default}
            />

            <p className='pokemon-order-li'>
                {formatPokemonOrder(pokemon.order)}
            </p>

            <p className='pokemon-name-li'>{formatPokemonName(pokemon.name)}</p>

            <div className='pokemon-tag-types-li'>
                {
                    pokemon.types.map(item => (
                        <div className='pokemon-tag-type-li'
                          style={{ backgroundColor: getTagColorByTypeName(item.type.name) }}>
                            {formatPokemonName(item.type.name)}
                        </div>
                    ))
                }
            </div>
        </Container>
    );
}

export default ListItem;