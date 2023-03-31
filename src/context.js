import React, { useContext, createContext, useState, useEffect } from 'react'

import { weatherDataForNDays, formatWeatherData } from './utils'

const AppContext = createContext(null)

const AppProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    let response = weatherDataForNDays(6, location)
    response.then(data => {
      data = formatWeatherData(data)
      setWeatherData(data)
      setLoading(false)
    })
  }, []);

  console.log(location)

  return (
    <AppContext.Provider
      value={{
        location,
        weatherData,
        showSearchForm,
        setLocation,
        setShowSearchForm,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export { AppProvider }