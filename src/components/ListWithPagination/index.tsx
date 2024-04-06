import React, { useState, useEffect } from 'react';
import { pageList, getPokemon, } from '@services/pokeapi';
import ListItem from '../ListItem';
import Modal from '../Modal'
import { Pokemon } from 'types/poke-api';
import PaginationControl from './PaginationControl';
import './style.css';
import LoadingPage from '@components/LoadingPage';
import ToggleButton from '@components/ToggleButton';
import { useNavigate } from 'react-router-dom';

interface ListWithPaginationProps {
  pageData: Pokemon[];
  loading: boolean;
  onChangePage: (pageNumber: number) => void;
  onClickItem: (pokemon: Pokemon) => void;
  onDoubleClick: (pokemon: Pokemon) => void; 
}

const ListWithPagination = ({
  pageData,
  loading,
  onChangePage,
  onClickItem,
  onDoubleClick,
} : ListWithPaginationProps) => {
  const navigate = useNavigate();

    return(
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <PaginationControl
          onChangePage={onChangePage}
        />

        <button style={{ marginLeft: '12px' }} onClick={() => navigate('/favourite-pokemons')}>
          {'Check out Your Favourite Pokemons <3!'}
        </button>
      </div>
        {
          loading && <LoadingPage />
        }

        {
          !loading && (
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
          )
        }
    </>
    )
}

export default ListWithPagination;