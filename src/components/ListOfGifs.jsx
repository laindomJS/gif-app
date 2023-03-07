import { useState, useEffect } from 'react';
import getGifs from '../services/getGifs';
import { Gif } from './Gif';

export const ListOfGifs = ({ params }) => {
	const { keyword } = params;

	const [gifs, setGifs] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		getGifs({ keyword }).then((gifs) => {
			setGifs(gifs);
			setLoading(false);
		});
	}, [keyword]);

	return (
		<>
			{loading ? (
				<h2>Loading...</h2>
			) : (
				gifs.map((gif) => <Gif key={gif.id} {...gif} />)
			)}
		</>
	)
}
