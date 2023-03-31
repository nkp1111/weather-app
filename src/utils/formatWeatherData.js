const formatWeatherData = (weatherData) => {
  // format weather data, destruct all the data
  let formattedWeatherData = weatherData.map(item => {
    let weatherItem = {}
    let { day: { maxtemp_c, maxtemp_f, mintemp_c, mintemp_f, avghumidity, avgvis_miles, maxwind_mph, condition }, hour, date } = item.forecast.forecastday[0]
    // temperature celsius and fahrenheit
    weatherItem["temperature"] = {
      "cel": {
        max: maxtemp_c,
        min: mintemp_c,
      },
      "fah": {
        max: maxtemp_f,
        min: mintemp_f,
      }
    }
    // humidity, %
    weatherItem["humidity"] = avghumidity
    // visibility, miles
    weatherItem["visibility"] = avgvis_miles
    // wind speed, miles/hour
    weatherItem["wind_speed"] = maxwind_mph
    // pressure, mb
    weatherItem["pressure"] = hour[0].pressure_mb
    // weather condition
    weatherItem["condition"] = condition.text
    // weather icon
    weatherItem["icon"] = condition.icon

    // location and time data 
    const loc = item.location
    weatherItem["date"] = date
    weatherItem["location"] = {
      name: loc.name,
      lat_lon: [loc.lat, loc.lon],
      region: loc.region,
      country: loc.country,
    }
    return weatherItem
  })

  return formattedWeatherData
}

export default formatWeatherData