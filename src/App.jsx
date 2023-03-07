import { ListOfGifs } from './components/ListOfGifs';
import './App.css';

import { Link, Route } from 'wouter';

function App() {
	return (
		<div className='App'>
			<h1>Gif App</h1>
      <Link to="/gifs/mario">Gifs de Mario</Link>
      <Link to="/gifs/link">Gifs de Link</Link>
      <Link to="/gifs/samus">Gifs de Samus</Link>
      <Route path='/gifs/:keyword' component={ListOfGifs} />
		</div>
	)
}

export default App;
