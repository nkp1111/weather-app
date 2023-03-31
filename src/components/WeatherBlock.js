import React from 'react'

const WeatherBlock = ({ data }) => {
  const { temperature: { cel, fah }, condition, icon, ind, date } = data

  return (
    <article className='card bg-dark'>
      <h2>
        {ind === 0
          ? "Tomorrow"
          : date}
      </h2>
      <img src={icon} alt={condition} />
      <div>
        <span>{cel.max}</span>
        <span>{cel.min}</span>
      </div>
    </article>
  )
}

export default WeatherBlock
