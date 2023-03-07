import { useState } from 'react';
import { Link, useLocation } from 'wouter';

const POPULAR_GIFS = ['Bladerunner', 'Mario', 'Link', 'Goku', 'Programming'];

export const Home = () => {
	
	const [keyword, setKeyword] = useState('');
	const [path, pushLocation] = useLocation();

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
			<form onSubmit={handleSubmit}>
				<input type="text" value={keyword} placeholder='Search a gif here...' onChange={handleChange} />
			</form>
			<ul>
				{POPULAR_GIFS.map((popularGif) => (
					<li key={popularGif}>
						<Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
					</li>
				))}
			</ul>
		</>
	)
}
