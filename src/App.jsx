import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { SearchResults } from './pages/SearchResults';

import { Link, Route } from 'wouter';
import './App.css';

function App() {
	return (
		<div className='App'>
      <Link to='/'>Home</Link>
      <Route component={Home} path='/' />
      <Route component={SearchResults} path='/search/:keyword' />
      <Route component={Detail} path='/gif/:id' />
		</div>
	)
}

export default App;
