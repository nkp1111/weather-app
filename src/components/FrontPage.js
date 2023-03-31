import React from 'react'
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from 'react-icons/tb'

import WeatherBlock from './WeatherBlock'
import { highlightsData } from '../lib/data'
import HighlightInfo from './HighlightInfo'
import useGlobalContext from '../context'
import Spinner from './Spinner'
import "./frontpage.css"

const FontPage = () => {

  const { weatherData, loading, temperatureUnit, setTemperatureUnit, } = useGlobalContext()

  if (loading) {
    return <Spinner message="Loading data. Please wait..." />
  }

  let { wind_speed, humidity, visibility, pressure } = weatherData[0]

  return (
    <div className='app__frontpage'>

      <div className="app__frontpage-temps d-flex justify-content-end align-items-center">
        <button className={`btn temp-btn ${temperatureUnit === "cel" && "active"}`}
          onClick={() => setTemperatureUnit("cel")}>
          <TbTemperatureCelsius />
        </button>
        <button className={`btn temp-btn ${temperatureUnit === "fah" && "active"}`}
          onClick={() => setTemperatureUnit("fah")}>
          <TbTemperatureFahrenheit />
        </button>
      </div>

      <div className="app__frontpage-weathers d-flex justify-content-between">
        {weatherData?.slice(1,).map((item, ind) => <WeatherBlock key={ind} data={{ ...item, ind }} />)}
      </div>

      <section className="app__frontpage-stats">
        <h2>Today's Highlights</h2>
        <div className="container">
          <div className="row">
            {highlightsData(wind_speed, humidity, visibility, pressure).map(item => (
              <HighlightInfo data={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FontPage
