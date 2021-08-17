import React from 'react'
import '../styles/SearchBar.css'
import { FiSearch } from 'react-icons/fi'

const SearchBar = ({ searchTerm, handleChange }) => {
  return (
    <div className='SearchBar'>
      <FiSearch className='search-icon' color='#fff' size='1rem' />
      <input
        type='text'
        placeholder='Search for a Country...'
        className='search-input'
        value={searchTerm}
        onChange={e => handleChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
