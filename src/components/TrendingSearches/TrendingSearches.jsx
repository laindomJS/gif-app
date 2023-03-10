import { useState, useEffect } from 'react';
import { Category } from '../Category/Category';
import { useNearScreen } from '../../hooks/useNearScreen';
import getTrendingService from '../../services/getTrendingService';

const TrendingSearchs = () => {
	const [trends, setTrends] = useState([]);

	useEffect(() => {
		getTrendingService().then(setTrends);
	}, [])

	return <Category options={trends} name='Trending Now' />
}

export const LazyTrending = () => {

  const { isNearScreen, fromRef } = useNearScreen({
    distance: '0px'
  })

	return <div ref={fromRef}>{isNearScreen ? <TrendingSearchs /> : null}</div>
}
