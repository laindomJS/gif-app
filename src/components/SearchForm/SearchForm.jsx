import React, { useState } from "react"

const SearchForm = ({ onSubmit }) => {

  const [keyword, setKeyword] = useState('');
  
  const handleChange = (evt) => {
		setKeyword(evt.target.value);
	}

	const handleSubmit = (evt) => {
		evt.preventDefault();
		onSubmit({keyword});
	}

  return (
    <form onSubmit={handleSubmit} className='w-full flex items-center justify-center'>
			<input 
      className='h-10 w-48 md:w-56 lg:w-80 p-2 placeholder:text-black text-black' 
      type="text" 
      value={keyword} 
      placeholder='Search a gif here...' 
      onChange={handleChange} />

			<button className='h-10 bg-cyan-500 w-24 md:w-32 transition-transform cursor-pointer hover:-scale-50'>Search</button>
		</form>
  )
}

export default React.memo(SearchForm);