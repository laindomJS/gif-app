import { useState, useEffect } from 'react';  
import { Category } from '../Category/Category';
import getTrendingService from '../../services/getTrendingService';

const TrendingSearches = () => {
	const [trends, setTrends] = useState([]);

	useEffect(() => {
		getTrendingService().then(setTrends);
	}, [])

	return <Category options={trends} name='Trending Now' />
}

export default TrendingSearches;