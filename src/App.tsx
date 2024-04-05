import { Suspense } from 'react';
import { Await, useLoaderData, } from 'react-router-dom';
import LoadingPage from '@components/LoadingPage';
import HomePage from '@components/HomePage';

function App() {
  const { pokemonListPromise } = useLoaderData();

  return (
    <Suspense fallback={<LoadingPage />}>
      <Await
        resolve={pokemonListPromise}
        children={(pokemonListResolved) => <HomePage data={pokemonListResolved} />}
      />
    </Suspense>
  )
}

export default App
