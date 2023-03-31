import React from 'react'

import { viewDate, getTemperatureForUnit } from '../utils'
import useGlobalContext from '../context'

const WeatherBlock = ({ data }) => {
  const { temperatureUnit } = useGlobalContext()
  const { temperature, condition, icon, ind, date } = data
  const { maxTemp, minTemp, Icon } = getTemperatureForUnit(temperature, temperatureUnit)
  return (
    <article className='card'>
      <h2>
        {ind === 0
          ? "Tomorrow"
          : viewDate(date)}
      </h2>
      <img src={icon} alt={condition} />
      <div className='app__flex'>
        <span>{maxTemp}<Icon /></span>
        <span>{minTemp}<Icon /></span>
      </div>
    </article>
  )
}

export default WeatherBlock
