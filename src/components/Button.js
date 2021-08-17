import React from 'react'
import {Link} from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { BiArrowBack } from 'react-icons/bi'
import '../styles/Button.css'

const Button = ({ icon, text, handleClick, page }) => {
  return (
        <Link to={`/?page=${page}`} className='Button' onClick={() => handleClick(page)}>
          {icon === 'chev-left' ? (
            <FiChevronLeft size='2rem' />
          ) : (
            icon === 'back' && <BiArrowBack />
          )}
          {text}
          {icon === 'chev-right' && <FiChevronRight size='2rem' />}
        </Link>
  )
}

export default Button
