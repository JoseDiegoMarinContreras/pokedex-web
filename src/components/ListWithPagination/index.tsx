import React, { useState, useEffect } from 'react';
import { pageList, getPokemon, } from '@services/pokeapi';
import ListItem from '../ListItem';
import Modal from '../Modal'
import { Pokemon } from 'types/poke-api';
import PaginationControl from './PaginationControl';
import './style.css';
import LoadingPage from '@components/LoadingPage';

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

    return(
    <>
        <PaginationControl
          onChangePage={onChangePage}
        />
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