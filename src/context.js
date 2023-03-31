import React, { useContext, createContext, useState, useEffect } from 'react'

import { weatherDataForNDays, formatWeatherData } from './utils'

const AppContext = createContext(null)

const AppProvider = ({ children }) => {
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
    <AppContext.Provider
      value={{
        location,
        weatherData,
        showSearchForm,
        setLocation,
        setShowSearchForm,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export { AppProvider }