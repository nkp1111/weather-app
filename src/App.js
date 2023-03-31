import React, { useState, useEffect } from 'react'

import { Sidebar, FrontPage } from './components'
import { weatherDataForNDays, formatWeatherData } from './utils'

const App = () => {

  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [showSearchForm, setShowSearchForm] = useState(false);

  useEffect(() => {
    let response = weatherDataForNDays(6, location)
    response.then(data => {
      data = formatWeatherData(data)
      setWeatherData(data)
    })
  }, []);

  return (
    <main className='app d-flex'>
      <h1 className='invisible text-center position-absolute'>Weather App</h1>
      <Sidebar {...{ weatherData, showSearchForm, setShowSearchForm }} />
      <FrontPage weatherData={weatherData} />
    </main>
  )
}

export default App

