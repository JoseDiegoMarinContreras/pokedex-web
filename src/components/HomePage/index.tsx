import { useEffect, useState, } from 'react';
import ListWithPagination from "@components/ListWithPagination";
import { Pokemon } from "types/poke-api";
import { getPokemonsWithDetails, } from '@services/pokeapi';
import Modal from '@components/Modal';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAppState } from '@storage/app-state';

interface HomePageProps {
    data: Pokemon[]
}

const HomePage = ({ data } : HomePageProps) => {
    const [page, setPage] = useState<null | number>(null);
    const [pageData, setPageData] = useState(data);
    const [loading, setLoading] = useState(false);
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setAppState({ pageData }));
    }, [pageData]);

    useEffect(() => {
        (async() => {
            if(page !== null){
                setLoading(true);
                const data = await getPokemonsWithDetails(page);
                setPageData(data);
                setLoading(false);
            }
        })()
    }, [page]);

    return (
        <>
        <Modal isOpen={!!pokemon}
          onClose={() => setPokemon(null)}
        >
            {
                pokemon && (
                    <img src={pokemon.sprites.front_default}
                      alt={pokemon.name}
                      style={{ minWidth: '200px', width: '36vw' }}
                    />
                )
            }
        </Modal>
        <ListWithPagination pageData={pageData}
          loading={loading}
          onChangePage={(pageNumber) => setPage(pageNumber)}
          onClickItem={(pokemon) => setPokemon(pokemon)}
          onDoubleClick={(pokemon) => navigate(`/pokemon/${pokemon.id}`,{ state: pokemon })}
        />
        </>
    );
}

export default HomePage;