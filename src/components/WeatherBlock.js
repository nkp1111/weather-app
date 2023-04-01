import React from 'react'

import { viewDate, getTemperatureForUnit } from '../utils'
import useGlobalContext from '../context'

const WeatherBlock = ({ data }) => {
  const { temperatureUnit, dayIndex, setDayIndex } = useGlobalContext()
  const { temperature, condition, icon, ind, date } = data
  const { maxTemp, minTemp, Icon } = getTemperatureForUnit(temperature, temperatureUnit)
  return (
    <article className='card'
      onClick={() => setDayIndex(ind)}>
      <h2>
        {ind === 0
          ? "Today"
          : ind === 1
            ? "Tomorrow"
            : viewDate(date)}
      </h2>
      <img src={icon} alt={condition} />
      <div className='d-flex'>
        <span>{maxTemp} &#176;{temperatureUnit[0].toUpperCase()} </span>
        <span>{minTemp} &#176;{temperatureUnit[0].toUpperCase()} </span>
      </div>
    </article>
  )
}

export default WeatherBlock
