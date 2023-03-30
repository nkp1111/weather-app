export const getWeatherData = async (location, date = "today") => {
  // returns weather data of a particular location and date default today
  // date format "yyyy-mm-dd"
  const baseUrl = "http://api.weatherapi.com/v1/"

  if (!location) {
    location = "ahmedabad"
  }

  let fetchUrl
  if (date === "today") {
    fetchUrl = `current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&aqi=no`
  } else {
    fetchUrl = `history.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&dt=${date}`
  }

  const response = await fetch(baseUrl + fetchUrl)
  const data = await response.json()
  return data
}

