import React from 'react'

const WeatherBlock = ({ data }) => {
  const { forecast, ind } = data
  const { date, day: { maxtemp_c, mintemp_c, condition: { icon, text } } } = forecast.forecastday[0]
  return (
    <article className='card bg-dark'>
      <h2>
        {ind === 0
          ? "Tomorrow"
          : data?.forecast.forecastday[0].date}
      </h2>
      <img src={icon} alt={text} />
      <div>
        <span>{maxtemp_c}</span>
        <span>{mintemp_c}</span>
      </div>
    </article>
  )
}

export default WeatherBlock
