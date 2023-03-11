import { Link } from 'wouter';

export const Gif = (gif) => {
	return (
		<Link to={`/gif/${gif.id}`}>
			<div className='w-72 h-fit relative border-2 rounded-sm shadow-sm shadow-indigo-600'>
				<img className='w-full' loading='lazy' src={gif.url} alt={gif.title} />
				<h4 className='absolute bottom-0 bg-black opacity-50'>{gif.title}</h4>
			</div>
		</Link>
	)
}
