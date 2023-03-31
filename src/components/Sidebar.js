import React from 'react'

import SidebarInfo from './SidebarInfo'
import SearchForm from './SearchForm'
import useGlobalContext from '../context'
import "./sidebar.css"

const Sidebar = () => {

  const { showSearchForm } = useGlobalContext()
  return (
    <div className='app__sidebar'>
      {showSearchForm
        ? <SearchForm />
        : <SidebarInfo />}

    </div>
  )
}

export default Sidebar
