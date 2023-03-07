import { Gif } from '../Gif/Gif';

export function ListOfGifs ({gifs}) {
  return <div>
    {
      gifs.map((gif) =>
        <Gif {...gif} />
      )
    }
  </div>
}
