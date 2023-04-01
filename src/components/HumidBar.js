import React from 'react'

const HumidBar = () => {
  return (
    <div className="humidity-bar">
      <span className="humid-background"></span>
      <span className='humid-val-0'>0</span>
      <span className='humid-val-50'>50</span>
      <span className='humid-val-100'>100</span>
      <span className='humid-val-percent'>%</span>
    </div>
  )
}

export default HumidBar
