import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import App from '../App';
import { initialListLoader } from './loaders';
import Template from '@components/Template';
import PokemonDetailsPage from '@components/PokemonDetailsPage';
import FavouritePage from '@components/FavouritePage';

const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route element={<Template />}>
            <Route path='/'
              loader={initialListLoader}
              element={<App />}
            />

            <Route path='/pokemon/:id'
              element={<PokemonDetailsPage />}
            />

            <Route path='/favourite-pokemons'
              element={<FavouritePage />}
            />
        </Route>
        </>
    )
);

export default AppRouter;