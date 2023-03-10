import { Gif } from '../Gif/Gif';
import uuid from 'react-uuid';

export function ListOfGifs ({gifs}) {
  return <div className='min-h-screen flex flex-col justify-center items-center space-y-8 p-4 md:flex-wrap md:flex-row md:space-x-8'>
    {
      gifs.map((gif) =>
        <Gif key={uuid()} {...gif} />
      )
    }
  </div>
}
