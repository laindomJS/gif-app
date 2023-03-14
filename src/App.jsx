import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { SearchResults } from './pages/SearchResults';
import { Link, Route } from 'wouter';
import { GifsContextProvider } from './context/GifsContext';

function App () {
	return (
		<div className='w-full h-full flex flex-col items-center justify-center text-center'>
			<GifsContextProvider>
				<div className='font-bold text-3xl my-8'>
					<Link to='/'>Home</Link>
				</div>
				<Route component={Home} path='/' />
				<Route component={SearchResults} path='/search/:keyword' />
				<Route component={Detail} path='/gif/:id' />
				<Route component={() => <h1>Error 404 :C</h1>} path='/404' />
			</GifsContextProvider>
		</div>
	)
}

export default App;
