import { getWeatherData } from './getWeatherData'
import { formatDate } from './formatDate'

export const weatherDataForNDays = async (n = 1, location = "") => {
  // get weather data for n number of days until today
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth()
  const currentDay = today.getDate()
  const weatherData = []
  for (let i = 0; i < n; i++) {
    let weatherDate = new Date(currentYear, currentMonth, currentDay - i)
    weatherDate = formatDate(weatherDate)
    const data = await getWeatherData(location, weatherDate)
    weatherData.push(data)
  }
  return weatherData
}
