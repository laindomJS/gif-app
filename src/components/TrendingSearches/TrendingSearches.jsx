import { useState, useEffect } from 'react';
import { Category } from '../Category/Category';
import getTrendingService from '../../services/getTrendingService';

export const TrendingSearchs = () => {
	const [trends, setTrends] = useState([]);

	useEffect(() => {
    getTrendingService().then(setTrends);
  }, [])

  return <Category options={trends} name='Trending Now' />
}
