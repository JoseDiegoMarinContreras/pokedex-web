import { useEffect, useState } from 'react';
import ListItem from "@components/ListItem";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getTagColorByTypeName, } from '@utils';
import { getPokemonById } from '@services/pokeapi';
import { Pokemon } from 'types/poke-api';
import LoadingPage from '@components/LoadingPage';
import './style.css';
import StatBasePoints from './StatBasePoints';
import { useDispatch, useSelector } from 'react-redux';
import { resetAppState } from '@storage/app-state';

const PokemonDetailsPage = () => {
    const { state } = useLocation();
    const { id } = useParams();
    const [pokemon, setPokemon] = useState<Pokemon>(state);
    const appState = useSelector(state => state.appState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(state === null){
            (async () => {
                const response = await getPokemonById(id);
                setPokemon(response);
            })()
        }
    }, [state, id]);

    if(pokemon === null)
        return <LoadingPage />

    return (
    <div className='maincontainer-pdp'>
        <div className='controllers-pdp'>
            <button className='control-return-pdp'
              onClick={() => {
                navigate('/', { state: appState });
                dispatch(resetAppState());
              }}
            >{"<<"}</button>

            <button className='control-add-fav-pdp'>{"Add to Favourite +"}</button>
        </div>
        
        <div className='stats-pdp'>
            <div className='stats-card-pdp'>
                <ListItem pokemon={pokemon}
                  backgroundImage={getTagColorByTypeName(pokemon.types[0].type.name)}
                />
            </div>

            <div style={{ display:'flex', flexDirection: 'column', width: '100%' }}>
                <div className='stat-base-points-pdp'>
                    <p>Stats:</p>

                    <StatBasePoints stats={pokemon.stats} />
                </div>

                <div className='stats-overview-pdp'>
                    <p className='stat-overview-pdp'><strong>Height: </strong>{` ${pokemon.height}'`}</p>

                    <p className='stat-overview-pdp'><strong>Weight: </strong>{` ${pokemon.weight} lb`}</p>

                    <p className='stat-overview-pdp'><strong>Base Experience: </strong>{` ${pokemon.base_experience} xp`}</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default PokemonDetailsPage;