import { useState, useEffect } from 'react';
import getGifs from '../services/getGifs';
import { Gif } from './Gif';

export const ListOfGifs = ({ params }) => {

  const { keyword } = params;

  const [gifs, setGifs] = useState([]);
  
  useEffect(() => {
		getGifs({ keyword }).then((gifs) => setGifs(gifs));
	}, [keyword]);

  return gifs.map((gif) => (
    <Gif key={gif.id} {...gif} />
  ))
  
}
