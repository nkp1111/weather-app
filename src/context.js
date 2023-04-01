import React, { useContext, createContext, useState, useEffect } from 'react'

import { weatherDataForNDays, formatWeatherData } from './utils'

const AppContext = createContext(null)

const AppProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [temperatureUnit, setTemperatureUnit] = useState("cel");
  const [dayIndex, setDayIndex] = useState(0);

  const handleLocationChange = (location) => {
    setLoading(true)
    let response = weatherDataForNDays(6, location)
    response.then(data => {
      data = formatWeatherData(data)
      setWeatherData(data)
      setLoading(false)
    })
  }

  useEffect(() => {
    handleLocationChange(location)
  }, [location]);

  return (
    <AppContext.Provider
      value={{
        location,
        weatherData,
        showSearchForm,
        setLocation,
        setShowSearchForm,
        loading,
        temperatureUnit,
        setTemperatureUnit,
        dayIndex,
        setDayIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext
export { AppProvider }