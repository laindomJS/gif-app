import React, { Suspense } from 'react';
import { useNearScreen } from '../../hooks/useNearScreen';

const TrendingSearches = React.lazy(() => import('./TrendingSearches'));

export const LazyTrending = () => {
	const { isNearScreen, fromRef } = useNearScreen({
		distance: '0px',
	})
  
	return (
		<div ref={fromRef}>
			<Suspense fallack={'Cargando...'}>
				{isNearScreen ? <TrendingSearches /> : null}
			</Suspense>
		</div>
	)
}
