import { useContext } from 'react';
import { GifsContext } from '../context/GifsContext';

import { Gif } from '../components/Gif/Gif';

export const Detail = ({ params }) => {
	const { id } = params;
	const { gifs } = useContext(GifsContext);
	
	const gif = gifs.find(gif => gif.id === id);
 
	return <Gif {...gif} />
}
