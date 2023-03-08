import { useGlobalGifs } from '../hooks/useGlobalGifs';
import { Gif } from '../components/Gif/Gif';

export const Detail = ({ params }) => {
	const { id } = params;
	const gifs = useGlobalGifs();
	
	const gif = gifs.find(gif => gif.id === id);
 
	return <Gif {...gif} />
}
