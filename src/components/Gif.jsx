export const Gif = (gif) => {
	return (
		<div>
			<h4>{gif.title}</h4>
			<img src={gif.url} alt={gif.title} />
		</div>
	)
}
