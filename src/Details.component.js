import React from 'react'
import Images from './Images.component.js'
import close from './icon-close.svg'
import Rating from './Rating.component.js'
import './Details.css'

export default ({ currentRestaurant, handleClose, showingDetails }) => {
  const { name, rating, description, address, website, facebook, picturesList = [] } = currentRestaurant
  const classes = 'details ' + (showingDetails ? 'x--one-third' : 'x--zero')
  const hide = !showingDetails ? ' hide' : ''

  return (
    <article className={classes}>
      <div className={'close' + hide} onClick={handleClose}><img src={close} alt="close" /></div>
      <h1 className="name">{name}</h1>
      <Rating rating={rating} />
      <p className="description">{description}</p>
      <div className="properties">
        <address className="property property--address">{address}</address>
        <a href={'https://www.google.com/maps?q=' + address} className="property__link link" target="_blank">Get directions</a>
        <p className="property property--website"><a href={website} className="link" target="_blank">{website}</a></p>
        <p className="property property--facebook"><a href="" className="link">{facebook}</a></p>
      </div>
      <Images urls={picturesList} />
    </article>
  )
}
