import React from 'react'
import './Images.css'

export default ({ urls }) => (
  <div className="gallery">

    { urls.map(url =>
      <div className="image">
        <div className="image-border">
          <img src={url} alt="restaurant" />
        </div>
      </div>
    ) }
  </div>
)
