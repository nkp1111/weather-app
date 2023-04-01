import React from 'react'
import WindIcon from './WindIcon'
import HumidBar from './HumidBar'

const HighlightInfo = ({ data }) => {
  return (
    <div className="col-md-6">
      <article>
        <h3>{data.title}</h3>
        <div className="app__frontpage-info">
          <span className='info-value'>{data.value}</span>
          <span className='info-unit'>{data.unit}</span>
          {/* {additional content } */}
          {data.title === "Wind status"
            ? <WindIcon />
            : data.title === "Humidity"
              ? <HumidBar value={data.value} />
              : null}
        </div>
      </article>
    </div>
  )
}

export default HighlightInfo
