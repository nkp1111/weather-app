import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from 'react-icons/tb'

import WeatherBlock from './WeatherBlock'

const FontPage = ({ weatherData }) => {

  if (weatherData && weatherData[0]) {
    let { maxwind_mph: wind, avghumidity: humidity, avgvis_miles: visibility } = weatherData[0].forecast.forecastday[0].day
    let { pressure_mb } = weatherData[0].forecast.forecastday[0].hour[0]
    return (
      <div className='app__frontpage'>

        <div className="app__frontpage-temps">
          <span className='temp-celsius'>
            <TbTemperatureCelsius />
          </span>
          <span className='temp-fahren'>
            <TbTemperatureFahrenheit />
          </span>
        </div>

        <div className="app__frontpage-weathers d-flex">
          {weatherData?.slice(1,).map((item, ind) => <WeatherBlock key={ind} data={{ ...item, ind }} />)}
        </div>

        <section className="app__frontpage-stats">
          <h2>Today's Highlights</h2>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <article>
                  <h3>Wind status</h3>
                  <div className="app__frontpage-info">
                    <span className='info-value'>{wind}</span>
                    <span className='info-unit'>mph</span>
                    <span className='play-icon-holder'>
                      <BsFillPlayFill />
                    </span>
                  </div>
                </article>
              </div>
              <div className="col-6">
                <article>
                  <h3>Humidity</h3>
                  <div className="app__frontpage-info">
                    <span className='info-value'>{humidity}</span>
                    <span className='info-unit'> %</span>
                    <span className="humidity-bar">
                      <span className='humid-val-0'>0</span>
                      <span className='humid-val-50'>50</span>
                      <span className='humid-val-100'>100</span>
                      <span className='humid-val-percent'>%</span>
                    </span>
                  </div>
                </article>
              </div>
              <div className="col-6">
                <article>
                  <h3>Visibility</h3>
                  <div className="app__frontpage-info">
                    <span className='info-value'>{visibility}</span>
                    <span className='info-unit'>miles</span>

                  </div>
                </article>
              </div>
              <div className="col-6">
                <article>
                  <h3>Air Pressure</h3>
                  <div className="app__frontpage-info">
                    <span className='info-value'>{pressure_mb}</span>
                    <span className='info-unit'> mb</span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return <div>Empty</div>
}

export default FontPage
