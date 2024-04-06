import { useNavigate, } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListItem from '@components/ListItem';
import './style.css';

const FavouritePage = () => {
    const navigate = useNavigate();
    const pokemons = useSelector((state) => state.favouritePokemons.favPokemons);

    return (
    <div className='maincontainer-fp'>
        <div className='controllers-fp'>
            <button className='control-return-fp'
              onClick={() => {
                navigate('/');
              }}
            >{"<<"}</button>

            <h2>Your favourite pokemons list</h2>
        </div>

        <div className='listcontent-fp'>
              {
                pokemons.map((item) => (
                  <ListItem
                    key={item.id}
                    pokemon={item}
                  />
                ))
              }
            </div>
    </div>
    );
}

export default FavouritePage;