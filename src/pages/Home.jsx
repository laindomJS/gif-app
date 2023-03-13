import { useCallback } from 'react';
import { useLocation } from 'wouter';
import { useGifs } from '../hooks/useGifs';
import { ListOfGifs } from '../components/ListOfGifs/ListOfGifs';
import { LazyTrending } from '../components/TrendingSearches/LazyTrending';
import SearchForm  from '../components/SearchForm/SearchForm';

export const Home = () => {
	
	const [push, pushLocation] = useLocation();
	const { gifs } = useGifs();

	const handleSubmit = useCallback(({ keyword }) => {
		pushLocation(`/search/${keyword}`)
	}, [pushLocation])

	return (
		<>
			<h3 className='font-semibold text-xl mb-5'>Los gifs mas populares</h3>
			<SearchForm onSubmit={handleSubmit} />
			<ListOfGifs gifs={gifs} />
			<LazyTrending />
		</>
	)
}
