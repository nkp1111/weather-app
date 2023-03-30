import React from 'react'

import WeatherBlock from './WeatherBlock'

const FontPage = ({ weatherData }) => {

  return (
    <div className='app__frontpage'>
      <div className="app__frontpage-weathers d-flex">
        {weatherData?.slice(1,).map((item, ind) => <WeatherBlock key={ind} data={{ ...item, ind }} />)}
      </div>
    </div>
  )
}

export default FontPage
