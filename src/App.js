import React from 'react'

import { Sidebar, FrontPage } from './components'

const App = () => {

  return (
    <main className='app d-flex'>
      <h1 className='invisible text-center position-absolute'>Weather App</h1>
      <Sidebar />
      <FrontPage />
    </main>
  )
}

export default App

