import { ListOfGifs } from '../components/ListOfGifs/ListOfGifs';
import { useGifs } from '../hooks/useGifs';

export const SearchResults = ({ params }) => {
	const { keyword } = params;
	const { loading, gifs, setPage } = useGifs({ keyword })

  const handleNextPage = () => setPage(prevPage => prevPage + 1);

	return <>
    {
      loading
      ? <h3>Cargando...</h3>
      : <div className=''>
          <h3 className='uppercase font-medium text-center text-xl'>{decodeURI(keyword)} Gifs</h3>
          <ListOfGifs gifs={gifs} />
          <button className='h-10 w-32 bg-blue-500 font-bold mt-8' onClick={handleNextPage}>Get next Page</button>
      </div>
    }
  </>
}
