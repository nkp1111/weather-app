import React, { useRef } from 'react'
import { GrClose, GrSearch } from 'react-icons/gr'

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
        <button className="btn ms-auto"
          onClick={() => setShowSearchForm(false)}>
          <GrClose className='close-icon' />
        </button>
      </div>
      <div className="app__sidebar-form">
        <form onSubmit={(e) => handleSubmit(e)}
          className='app__flex'>
          <label>
            <GrSearch className='search-icon' />
            <input type="text" placeholder='Search location'
              ref={inputRef} />
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
      <div className="note mt-auto">
        <span className='invisible'>
          Location input can be:
          city-name(Paris), <br />
          latitude-longitude(48 ,2), <br />
          ip-address and more...<br />
        </span>
        <small>
          Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
        </small>
      </div>
    </div>
  )
}

export default SearchForm
