import React from 'react'
import { AiOutlineAim } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'
import { RxDotFilled } from 'react-icons/rx'

import { images } from '../constants'
import { viewDate } from '../utils/viewDate'


const Sidebar = ({ weatherData }) => {
  const { location } = weatherData
  return (
    <div className='app__sidebar flex-column'>
      <div className='app__sidebar-top'>
        <button className="btn">Search for places</button>
        <AiOutlineAim className='aim-icon' />
      </div>
      <div className="app__sidebar-image">
        <img src={images.Shower} alt="sun and cloud with little rainfall" />
      </div>
      <div className="app__sidebar-info">
        <div className="temp">
          <span>15</span> &#8451;
        </div>
        <div className="condition">
          Shower
        </div>
        <div className="time-and-place">
          <div className="time">
            Today
            <RxDotFilled />
            {viewDate()}
          </div>
          <div className="place">
            <MdLocationPin className='location-icon' />
            {location?.name || "Ahmedabad"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
