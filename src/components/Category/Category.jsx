import { Link } from 'wouter';

export const Category = ({ name, options = [] }) => {
	return (
    <div className='max-w-full text-center px-4'>
      <h3 className='font-bold text-2xl md:text-3xl mb-4'>{name}</h3>
      <ul className='flex flex-wrap space-x-6 items-center justify-center'>
        {options.map(option => (
          <Link to={`/search/${option}`}>
            <span className='text-blue-400 underline'>{option}</span>
          </Link>
        ))}
      </ul>
    </div>
	)
}
