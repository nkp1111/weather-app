import React from 'react'

import SidebarInfo from './SidebarInfo'
import SearchForm from './SearchForm'
import useGlobalContext from '../context'

const Sidebar = () => {

  const { showSearchForm } = useGlobalContext()
  return (
    <div className='app__sidebar flex-column'>
      {showSearchForm
        ? <SearchForm />
        : <SidebarInfo />}

    </div>
  )
}

export default Sidebar
