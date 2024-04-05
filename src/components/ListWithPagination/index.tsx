import React, { useState, useEffect } from 'react';
import { pageList, getPokemon, } from '@services/pokeapi';
import ListItem from '../ListItem';
import Modal from '../Modal'
import { Pokemon } from 'types/poke-api';
import PaginationControl from './PaginationControl';
import './style.css';

interface ListWithPaginationProps {
  pageData: Pokemon[];
  totalResults: number;
  onChangePage: (pageNumber: number) => void;
  onClickItem: (pokemon: Pokemon) => void;
  onDoubleClick: (pokemon: Pokemon) => void; 
}

const ListWithPagination = ({
  pageData,
  totalResults,
  onChangePage,
  onClickItem,
  onDoubleClick,
} : ListWithPaginationProps) => {
    const [page, setPage] = useState(1);
    const [list, setList] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(null);
    const [pokemon, setPokemon] = useState(false);

    useEffect(() => {
        if(pokemon){
            (async () => {
                const response = await getPokemon(pokemon.name);
                console.log(response);
                setModal(response);
            })()
        }
    }, [pokemon])
  
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
          const list = await pageList(page);
    
          setList(list.results);
          setLoading(false);
        }
        fetchData();
      }, [page]);

    if(loading)
      return <p>Fetching Data..</p>

    return(
    <>
        <Modal iseOpen={pokemon} onClose={() => setPokemon(false)}>
            {
                modal ? 
                <img src={modal.sprites.front_default} style={{ width: 200, height: 'auto' }} /> :
                <p>Loading Image</p>
             }
        </Modal>

        <PaginationControl
          totalResults={totalResults}
          onChangePage={onChangePage}
        />

        <div className='listcontent-lp'>
        {
          pageData.map((item) => (
            <ListItem
            key={item.id}
            pokemon={item}
            onClick={onClickItem}
            onDoubleClick={onDoubleClick}
            />
          ))
        }
      </div>
    </>
    )
}

export default ListWithPagination;