import React from 'react'
import './Images.css'

export default ({ urls }) => (
  <div className="gallery">
    <h2>Images</h2>
    { urls.map(url => <img src={url} className="image" alt="restaurant" />) }
  </div>
)
