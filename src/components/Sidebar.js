import React from 'react'
import { AiOutlineAim } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'

import { images } from '../constants'


const Sidebar = () => {
  return (
    <div className='app__sidebar app__flex'>
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
            Today . Fri 5 Jun
          </div>
          <div className="place">
            <MdLocationPin className='location-icon' />
            Place
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
