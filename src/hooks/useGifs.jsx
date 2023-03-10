import { useState, useEffect, useContext } from 'react';
import { GifsContext } from '../context/GifsContext';
import getGifs from '../services/getGifs';

const INITIAL_PAGE = 0;

export const useGifs = ({ keyword } = { keyword: null }) => {
	const [loading, setLoading] = useState(true);
	const [loadingPage, setLoadingPage] = useState(true);
	const [page, setPage] = useState(INITIAL_PAGE);

	const { gifs, setGifs } = useContext(GifsContext);

	const keywordToUse =
		keyword || localStorage.getItem('lastKeyword') || 'random';

	useEffect(() => {
		setLoading(true);

		getGifs({ keyword: keywordToUse }).then((gifs) => {
			setGifs(gifs);
			setLoading(false);
			localStorage.setItem('lastKeyword', keyword);
		})
	}, [keyword, setGifs, keywordToUse])

	useEffect(() => {
		if (page === INITIAL_PAGE) return;

		setLoadingPage(true);

		getGifs({ keyword: keywordToUse, page }).then((gifs) => {
			setGifs((prevGifs) => prevGifs.concat(gifs));
			setLoadingPage(false);
		})
	}, [page, keywordToUse, setGifs])

	return { loading, loadingPage, gifs, setPage }
}