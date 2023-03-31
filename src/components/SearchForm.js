import React from 'react'
import { GrClose } from 'react-icons/gr'

const SearchForm = ({ setShowSearchForm }) => {
  return (
    <div className='app__sidebar-form'>
      <div className='app__sidebar-top'>
        <button className="btn"
          onClick={() => setShowSearchForm(false)}>
          <GrClose className='close-icon' />
        </button>
      </div>
    </div>
  )
}

export default SearchForm
