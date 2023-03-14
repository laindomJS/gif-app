import { Redirect } from 'wouter';
import { Gif } from '../components/Gif/Gif';
import { useSingleGif } from '../hooks/useSingleGif';

export const Detail = ({ params }) => {
	const { gif, isLoading, isError }= useSingleGif({ id: params.id  });

	if (isLoading) {
		return (
			<>
				<h1>Loading...</h1>				
			</>
		)
	}

	if (isError) return <Redirect to="/404" />
	if (!gif) return null;

	return <Gif {...gif} />
}
