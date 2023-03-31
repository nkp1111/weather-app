import React from 'react'
import SidebarInfo from './SidebarInfo'
import SearchForm from './SearchForm'

const Sidebar = ({ weatherData, showSearchForm, setShowSearchForm }) => {

  return (
    <div className='app__sidebar flex-column'>
      {showSearchForm
        ? <SearchForm setShowSearchForm={setShowSearchForm} />
        : <SidebarInfo weatherData={weatherData} setShowSearchForm={setShowSearchForm} />}

    </div>
  )
}

export default Sidebar
