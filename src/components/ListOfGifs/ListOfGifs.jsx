import { Gif } from '../Gif/Gif';

export function ListOfGifs ({gifs}) {
  return <div className='flex flex-col justify-center items-center space-y-8 p-4 md:flex-wrap md:flex-row md:space-x-8'>
    {
      gifs.map((gif) =>
        <Gif {...gif} />
      )
    }
  </div>
}
