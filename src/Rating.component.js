import React from 'react'
import './Rating.css'
import greyKebab from './icon-kebab_grey.svg'
import redKebab from './icon-kebab_red.svg'
import halfKebab from './icon-kebab_half.svg'

export default ({ rating }) => {
  let kebabs = [kebab(greyKebab, 0), kebab(greyKebab, 1), kebab(greyKebab, 2), kebab(greyKebab, 3), kebab(greyKebab, 4)]

  for (let i = 0; i < rating; i++) {
    kebabs[i] = kebab(redKebab, i)
  }

  if (((rating * 10) % 10) !== 0) {
    let index = Math.floor(rating)
    kebabs[index] = kebab(halfKebab, index)
  }

  return (
    <div className="rating">
      {kebabs}
    </div>
  )
}

function kebab(type, key) {
  return (
    <img className="kebab" src={type} alt="rating kebab" key={key} />
  )
}
