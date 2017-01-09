import React from 'react'
import Images from './Images.component.js'
import './Details.css'

export default ({ currentRestaurant }) => {
  const { name, rating, description, address, website, facebook, pictureList } = currentRestaurant
  console.log(currentRestaurant)
  return (
    <article className="details x--one-third">
      <h1 className="name">{name}</h1>
      <p className="rating">{rating}</p>
      <p className="description">{description}</p>
      <div className="properties">
        <address className="property property--address">{address} <a className="property__link link">Get directions</a></address>
        <p className="property property--website"><a href="" className="link">{website}</a></p>
        <p className="property property--facebook"><a href="" className="link">{facebook}</a></p>
      </div>
      <Images urls={pictureList} />
    </article>
  )
}
