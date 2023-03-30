import React, { useState, useEffect } from 'react'

import { Sidebar, FrontPage } from './components'
import { weatherDataForNDays } from './utils/weatherDataForNDays'

const App = () => {

  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    let response = weatherDataForNDays(6, location)
    response.then(data => {
      setWeatherData(data)
    })
  }, []);




  return (
    <main className='app'>
      <h1 className='invisible text-center position-absolute'>Weather App</h1>
      <Sidebar weatherData={weatherData} />
      <FrontPage weatherData={weatherData} />
    </main>
  )
}

export default App

