import React from 'react'
import { GrClose, GrSearch } from 'react-icons/gr'
import { HiOutlineChevronRight } from 'react-icons/hi'

import useGlobalContext from '../context'

const SearchForm = () => {

  const { setShowSearchForm, location } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='app__sidebar-search'>
      <div className='app__sidebar-top'>
        <button className="btn"
          onClick={() => setShowSearchForm(false)}>
          <GrClose className='close-icon' />
        </button>
      </div>
      <div className="app__sidebar-form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            <GrSearch />
            <input type="text" />
          </label>
          <button className='btn'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default SearchForm
