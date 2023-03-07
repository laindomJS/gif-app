import { ListOfGifs } from './components/ListOfGifs';
import './App.css';

import { Route } from 'wouter';

function App() {
	return (
		<div className='App'>
			<h1>Gif App</h1>
      <Route path='/gif/:keyword' component={ListOfGifs} />
		</div>
	)
}

export default App;
