import React from 'react'
import './Images.css'

export default ({ urls }) => (
  <div className={'gallery' + (!urls.length ? ' hide' : '')}>
    {
      urls.map((url, i) => {
        return (
          <div className="image" key={i}>
            <div className="image-border">
              <img src={url} alt="restaurant" />
            </div>
          </div>
        )
      })
    }
  </div>
)
