import React from 'react'

const HumidBar = () => {
  return (
    <span className="humidity-bar">
      <span className='humid-val-0'>0</span>
      <span className='humid-val-50'>50</span>
      <span className='humid-val-100'>100</span>
      <span className='humid-val-percent'>%</span>
    </span>
  )
}

export default HumidBar
