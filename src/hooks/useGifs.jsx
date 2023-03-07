import { useState, useEffect } from 'react';
import getGifs from '../services/getGifs';

export const useGifs = ({ keyword } = { keyword: null }) => {
	const [gifs, setGifs] = useState([]);
	const [loading, setLoading] = useState(true);

	const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

	useEffect(() => {
		setLoading(true);

		getGifs({ keyword: keywordToUse }).then((gifs) => {
			setGifs(gifs);
			setLoading(false);
			localStorage.setItem('lastKeyword', keyword);
		})
	}, [keyword])

	return { loading, gifs }
}
