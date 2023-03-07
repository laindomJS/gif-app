import { useState, useEffect } from 'react';
import { Gif } from './components/Gif';
import getGifs from './services/getGifs';
import './App.css';

function App() {
	const [gifs, setGifs] = useState([]);
	const [keyword, setKeyword] = useState('programming');

	useEffect(() => {
		getGifs({ keyword }).then((gifs) => setGifs(gifs));
	}, [keyword]);

	return (
		<div className='App'>
			<h1>Gif App</h1>
			{gifs.map((gif) => (
				<Gif key={gif.id} {...gif} />
			))}
		</div>
	)
}

export default App;
