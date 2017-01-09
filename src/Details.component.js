import React from 'react'
import Images from './Images.component.js'
import './Details.css'

export default ({ name, rating, description, address, images }) => (
  <article className="details x--one-third">
    <h1 className="name">{name}</h1>
    <p className="rating">{rating}</p>
    <p className="description">{description}</p>
    <address>{address}</address>
    <Images urls={images} />
  </article>
)
