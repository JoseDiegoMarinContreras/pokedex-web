import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import App from '../App';
import { initialListLoader } from './loaders';

const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
              path='/'
              loader={initialListLoader}
              element={<App />}
            />
        </>
    )
);

export default AppRouter;