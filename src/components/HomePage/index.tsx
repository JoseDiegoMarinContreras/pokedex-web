import { useEffect, useState, } from 'react';
import ListWithPagination from "@components/ListWithPagination";
import { Pokemon } from "types/poke-api";
import { getPokemonsWithDetails, } from '@services/pokeapi';
import Modal from '@components/Modal';
import './style.css';

interface HomePageProps {
    data: Pokemon[]
}

const HomePage = ({ data } : HomePageProps) => {
    const [page, setPage] = useState<null | number>(null);
    const [pageData, setPageData] = useState(data);
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        (async() => {
            if(page !== null){
                const data = await getPokemonsWithDetails(page);
                setPageData(data);
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

        <div className="maincontainer-home">
            <section className="section-home">
                <ListWithPagination pageData={pageData}
                  onChangePage={(pageNumber) => setPage(pageNumber)}
                  onClickItem={(pokemon) => setPokemon(pokemon)}
                  onDoubleClick={(pokemon) => console.log("Double click")}
                />
            </section>
        </div>
        </>
    );
}

export default HomePage;