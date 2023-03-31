import React from 'react'

const HighlightInfo = ({ data }) => {
  return (
    <div className="col-6">
      <article>
        <h3>{data.title}</h3>
        <div className="app__frontpage-info">
          <span className='info-value'>{data.value}</span>
          <span className='info-unit'>{data.unit}</span>
        </div>
      </article>
    </div>
  )
}

export default HighlightInfo
