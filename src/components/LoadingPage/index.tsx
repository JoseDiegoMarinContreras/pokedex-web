import React, { useEffect } from 'react';
import './style.css';
import PikachuRunning from '@assets/gif/pikachu-running.gif';
import LoadingText from './LoadingText';
import { getPokemonsWithDetails, } from '@services/pokeapi';

const LoadingPage = () => {
    useEffect(() => {
        const fetchData = async () => {
            const response = await getPokemonsWithDetails(1);

            console.log(response);
        }

        fetchData();
    }, []);
    return(
        <div className={`maincontainer-lp`}>
            <div className={`content-lp`}>
                <img src={PikachuRunning} className='image-lp'  />

                <LoadingText text='Loading' />
            </div>
        </div>
    );
}

export default LoadingPage;