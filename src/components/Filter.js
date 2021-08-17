import React from 'react'
import '../styles/Filter.css'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { useState } from 'react'

const Filter = ({continent, handleClick}) => {
  const [dropdown, setDropdown] = useState(false)
  const continents = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  return (
    <div className='Filter'>
      <div className='filter-tab' onClick={() => setDropdown(!dropdown)}>
        Filter by Region
        {dropdown ? <FiChevronUp size='1.5rem' /> : <FiChevronDown size='1.5rem' />}
      </div>
      {dropdown && (
        <ul className='filter-options'>
          {continents.map((continent, i) => (
            <li key={i} className='filter-option' onClick={() => handleClick(continent)}>{continent}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Filter
