import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { SearchResults } from './pages/SearchResults';

import { Link, Route } from 'wouter';
import './App.css';
import { GifsContextProvider } from './context/GifsContext';

function App() {
	return (
		<div className='App'>
			<GifsContextProvider>
				<Link to='/'>Home</Link>
				<Route component={Home} path='/' />
				<Route component={SearchResults} path='/search/:keyword' />
				<Route component={Detail} path='/gif/:id' />
			</GifsContextProvider>
		</div>
	)
}

export default App;
