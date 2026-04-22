import NavBar from './components/shared/NavBar'
import SearchBar from './components/shared/SearchBar'
import CardGrid from './components/results/CardGrid';
import { useState } from 'react'
import { useProductSearch } from './hooks/useProductSearch';

function App() {

  const [productSearch, setProductSearch] = useState('');

  const { data, isLoading, isError } = useProductSearch(productSearch);

  return (
    <>
      <NavBar />
      <SearchBar setProductSearch={setProductSearch} productSearch={productSearch} />
      {isLoading ? (
        <p className='mx-12 my-4 text-primary font-header'>Loading...</p>
      ) : isError ? (
        <p className='mx-12 my-4 text-primary font-header'>Error</p>
      ) : (
        <CardGrid products={data ?? []} />
      )}
    </>
  )
}

export default App
