import React from 'react'

import { Sidebar, FrontPage } from './components'
import { getWeatherData } from './utils/getWeatherData'

const App = () => {

  getWeatherData()
  return (
    <main className='app'>
      <h1 className='invisible text-center position-absolute'>Weather App</h1>
      <Sidebar />
      <FrontPage />
    </main>
  )
}

export default App

