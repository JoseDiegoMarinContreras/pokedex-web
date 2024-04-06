import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import App from '../App';
import { initialListLoader } from './loaders';
import Template from '@components/Template';
import PokemonDetailsPage from '@components/PokemonDetailsPage';

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
        </Route>
        </>
    )
);

export default AppRouter;