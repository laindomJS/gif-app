import { useEffect } from 'react';
import { useState } from 'react';
import { useGifs } from './useGifs';
import getGif from '../services/getGif';

export const useSingleGif = ({ id }) => {
  const { gifs } = useGifs();
  const gifFromCache = gifs.find(gif => gif.id === id);

  const [gif, setGif] = useState(gifFromCache);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!gif) {
      setIsLoading(true);
      getGif({ id })
        .then(gif => {
          setGif(gif);
          setIsLoading(false);
          setIsError(false);
        }).catch(err => {
          setIsLoading(false);
          setIsError(true);
        })
    }
  }, [gif, id])

  return { gif, isLoading, isError }
}


