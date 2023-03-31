import React from 'react'
import { AiOutlineAim } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'
import { RxDotFilled } from 'react-icons/rx'

import { images } from '../constants'
import { viewDate, getTemperatureForUnit } from '../utils'
import useGlobalContext from '../context'
import Spinner from './Spinner'

const SidebarInfo = () => {

  const { weatherData, setShowSearchForm, loading, temperatureUnit } = useGlobalContext()

  if (loading) {
    return <Spinner message="Wait for a while" />
  }
  const { location, condition, icon, temperature } = weatherData[0]
  const { avgTemp, Icon } = getTemperatureForUnit(temperature, temperatureUnit)

  return (
    <div className='app__sidebar-info'>
      {/* open search bar for different location */}
      <div className='app__sidebar-top'>
        <button className="btn"
          onClick={() => setShowSearchForm(true)}>Search for places</button>
        <AiOutlineAim className='aim-icon' />
      </div>
      {/* show weather icon  */}
      <div className="app__sidebar-image">
        <img src={icon} alt={condition} />
      </div>
      {/* show temperature stats  */}
      <div className="app__sidebar-info">
        <div className="temp">
          <span>{avgTemp}</span>
          <Icon />
        </div>
        <div className="condition">
          {condition}
        </div>
        <div className="time-and-place">
          <div className="time">
            Today
            <RxDotFilled />
            {viewDate()}
          </div>
          <div className="place">
            <MdLocationPin className='location-icon' />
            {location?.name || "Unknown"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarInfo
