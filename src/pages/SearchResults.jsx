import { useEffect, useState } from 'react';
import { ListOfGifs } from '../components/ListOfGifs/ListOfGifs';
import getGifs from '../services/getGifs';

export const SearchResults = ({ params }) => {
	const { keyword } = params;
	const [gifs, setGifs] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		getGifs(keyword).then((gifs) => {
			setGifs(gifs);
			setLoading(false);
		})
	}, [keyword]);

	return <>
    {
      loading
      ? <h3>Cargando...</h3>
      : <ListOfGifs gifs={gifs} />
    }
  </>
}
