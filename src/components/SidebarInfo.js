import React from 'react'
import { AiOutlineAim } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'
import { RxDotFilled } from 'react-icons/rx'

import { images } from '../constants'
import { viewDate, getTemperatureForUnit } from '../utils'
import useGlobalContext from '../context'
import Spinner from './Spinner'

const SidebarInfo = () => {

  const { weatherData, setShowSearchForm, loading, temperatureUnit, dayIndex } = useGlobalContext()

  if (loading) {
    return <Spinner message="Wait for a while" />
  }
  const { location, condition, icon, temperature, date } = weatherData[dayIndex]
  const { avgTemp, Icon } = getTemperatureForUnit(temperature, temperatureUnit)

  return (
    <div className='app__sidebar-info'>
      {/* open search bar for different location */}
      <div className='app__sidebar-top'>
        <button className="btn"
          onClick={() => setShowSearchForm(true)}>
          Search for places
        </button>
        <span>
          <AiOutlineAim className='aim-icon' />
        </span>
      </div>
      {/* show weather icon  */}
      <div className="app__sidebar-image app__flex">
        <img src={images.CloudBackground} alt="cloud background" className='background' />
        <img src={icon} alt={condition} className='main-image' />
      </div>
      {/* show temperature stats  */}
      <div className="app__sidebar-stats">
        <div className="temp app__flex">
          <span>{avgTemp}</span>
          <span><Icon /></span>
        </div>
        <div className="condition">
          {condition}
        </div>
        <div className="time-and-place">
          <div className="time app__flex">
            {dayIndex === 0
              ? "Today"
              : `${dayIndex} Days ago`}
            <span>
              <RxDotFilled />
            </span>
            {dayIndex === 0
              ? viewDate()
              : viewDate(date)}
          </div>
          <div className="place app__flex" onClick={() => setShowSearchForm(true)}>
            <span>
              <MdLocationPin className='location-icon' />
            </span>
            {location?.name || "Unknown"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarInfo
