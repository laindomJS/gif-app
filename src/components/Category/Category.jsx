import { Link } from 'wouter';

export const Category = ({ name, options = [] }) => {
	return (
    <div className='category-title'>
      <h3>{name}</h3>
      <ul>
        {options.map(option => (
          <Link to={`/search/${option}`}>{option}</Link>
        ))}
      </ul>
    </div>
	)
}
