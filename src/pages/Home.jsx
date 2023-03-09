import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useGifs } from '../hooks/useGifs';
import { ListOfGifs } from '../components/ListOfGifs/ListOfGifs';
import { TrendingSearchs } from '../components/TrendingSearches/TrendingSearches';

export const Home = () => {
	
	const [keyword, setKeyword] = useState('');
	const [path, pushLocation] = useLocation();
	const { loading, gifs } = useGifs();

	const handleChange = (evt) => {
		setKeyword(evt.target.value);
	}

	const handleSubmit = (evt) => {
		evt.preventDefault();
		pushLocation(`/search/${keyword}`);
	}

	return (
		<>
			<h3>Los gifs mas populares</h3>
			<form onSubmit={handleSubmit} className='form-container'>
				<input className='inputGif' type="text" value={keyword} placeholder='Search a gif here...' onChange={handleChange} />
				<button>Search</button>
			</form>
			<ListOfGifs gifs={gifs} />
			<div className='App-category'>
				<TrendingSearchs />
			</div>
		</>
	)
}
