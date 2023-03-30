import React, { useState, useEffect } from 'react'

import { Sidebar, FrontPage } from './components'
import { weatherDataForNDays } from './utils/weatherDataForNDays'

const App = () => {

  const [location, setLocation] = useState("");

  useEffect(() => {
    weatherDataForNDays(6)
  }, []);

  return (
    <main className='app'>
      <h1 className='invisible text-center position-absolute'>Weather App</h1>
      <Sidebar />
      <FrontPage />
    </main>
  )
}

export default App

