import './Gif.css';

export const Gif = (gif) => {
	return (
		<a href='#' className='gif'>
			<h4>{gif.title}</h4>
			<img src={gif.url} alt={gif.title} />
		</a>
	)
}
