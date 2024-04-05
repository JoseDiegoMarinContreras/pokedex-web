import React, { useState, useEffect } from 'react';
import { nextPageDate, getPokemon, } from '../../service/pokeapi';
import ListItem from '../ListItem';
import Modal from '../Modal'

const ListWithPagination = () => {
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);
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
          const list = await nextPageDate(page);
    
          setList(list);
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

        <ul>
        {
          list.map((item) => (
            <ListItem
            pokemon={item} 
            onClick={(selectedPokemon) => {
                console.log(selectedPokemon);
                setPokemon(selectedPokemon);
            }}
            />
          ))
        }
      </ul>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>{"<"}</button>
        <p style={{ marginLeft: 6, marginRight: 6 }}>{page}</p>
        <button onClick={() => setPage(page + 1)} disabled={page === 8}>{">"}</button>
      </div>
    </>
    )
}

export default ListWithPagination;