import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_REACT_API_KEY}&q=panda&limit=10&offset=0&rating=g&lang=en`;

  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setGifs(data.data);
        console.log(data.data)
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <h1>Hello World</h1>
      {
        gifs.map(gif => (
          <img src={gif.images.downsized_medium.url} alt={gif.title} />
        ))
      }
    </div>
  )
}

export default App;
