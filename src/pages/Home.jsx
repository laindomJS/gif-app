import { useState } from 'react';
import { useLocation } from 'wouter';
import { useGifs } from '../hooks/useGifs';
import { ListOfGifs } from '../components/ListOfGifs/ListOfGifs';
import { TrendingSearchs } from '../components/TrendingSearches/TrendingSearches';

export const Home = () => {
	
	const [keyword, setKeyword] = useState('');
	const [push, pushLocation] = useLocation();
	const { gifs } = useGifs();

	const handleChange = (evt) => {
		setKeyword(evt.target.value);
	}

	const handleSubmit = (evt) => {
		evt.preventDefault();
		pushLocation(`/search/${keyword}`);
	}

	return (
		<>
			<h3 className='font-semibold text-xl mb-5'>Los gifs mas populares</h3>
			<form onSubmit={handleSubmit} className='w-full flex items-center justify-center'>
				<input className='h-10 w-48 md:w-56 lg:w-80 p-2 placeholder:text-black' type="text" value={keyword} placeholder='Search a gif here...' onChange={handleChange} />
				<button className='h-10 bg-cyan-500 w-24 md:w-32 transition-transform cursor-pointer hover:-scale-50'>Search</button>
			</form>
			<ListOfGifs gifs={gifs} />
			<TrendingSearchs />
		</>
	)
}
