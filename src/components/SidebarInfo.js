import React from 'react'
import { AiOutlineAim } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'
import { RxDotFilled } from 'react-icons/rx'

import { images } from '../constants'
import { viewDate } from '../utils'
import useGlobalContext from '../context'
import Spinner from './Spinner'

const SidebarInfo = () => {

  const { weatherData, setShowSearchForm, loading } = useGlobalContext()

  if (loading) {
    return <Spinner message="Wait for a while" />
  }
  const { location, condition, icon, temperature: { cel, fah } } = weatherData[0]
  return (
    <div className='app__sidebar-info'>
      <div className='app__sidebar-top'>
        <button className="btn"
          onClick={() => setShowSearchForm(true)}>Search for places</button>
        <AiOutlineAim className='aim-icon' />
      </div>
      <div className="app__sidebar-image">
        <img src={icon} alt={condition} />
      </div>
      <div className="app__sidebar-info">
        <div className="temp">
          <span>{(cel.max + cel.min) / 2}</span> &#8451;
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
