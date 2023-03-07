import { Link } from 'wouter';
import './Gif.css';

export const Gif = (gif) => {
	return (
		<Link to={`/gif/${gif.id}`} className='gif'>
			<h4>{gif.title}</h4>
			<img src={gif.url} alt={gif.title} />
		</Link>
	)
}
