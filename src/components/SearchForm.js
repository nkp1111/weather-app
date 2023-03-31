import React, { useRef } from 'react'
import { GrClose, GrSearch } from 'react-icons/gr'
import { HiOutlineChevronRight } from 'react-icons/hi'

import useGlobalContext from '../context'
import SearchOptions from './SearchOptions'

const SearchForm = () => {

  const inputRef = useRef()

  const { setShowSearchForm, location, setLocation } = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault()
    setLocation(inputRef.current.value)
    setShowSearchForm(false)
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
            <input type="text" ref={inputRef} />
          </label>
          <button className='btn'>Search</button>
        </form>
      </div>
      <div className="location-option">
        <SearchOptions
          location={location}
          setLocation={setLocation}
          input={inputRef}
          setShowSearchForm={setShowSearchForm} />
      </div>
    </div>
  )
}

export default SearchForm
