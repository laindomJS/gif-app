import { Gif } from '../Gif/Gif';
import uuid from 'react-uuid';

export function ListOfGifs ({gifs}) {
  return <div className='min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 gap-4 items-center'>
    {
      gifs.map((gif) =>
        <Gif key={uuid()} {...gif} />
      )
    }
  </div>
}
