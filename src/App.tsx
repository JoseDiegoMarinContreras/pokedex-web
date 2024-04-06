import { Suspense } from 'react';
import { Await, useLoaderData, } from 'react-router-dom';
import LoadingPage from '@components/LoadingPage';
import HomePage from '@components/HomePage';
import { useSelector } from 'react-redux';

function App() {
  const { pokemonListPromise } = useLoaderData();
  const pageData = useSelector(state => state.appState.pageData);

  if(pageData)
    return <HomePage data={pageData} />;
  
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
