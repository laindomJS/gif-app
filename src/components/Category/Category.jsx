import { Link } from 'wouter';

export const Category = ({ name, options = [] }) => {
	return (
    <div className='w-full text-center'>
      <h3 className='font-bold text-2xl md:text-3xl mb-4'>{name}</h3>
      <ul className='px-4'>
        {options.map(option => (
          <Link to={`/search/${option}`}>
            <span className='mx-2 text-blue-400 underline'>{option}</span>
          </Link>
        ))}
      </ul>
    </div>
	)
}
