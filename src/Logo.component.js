import React from 'react'
import logo from './logo.svg'
import './Logo.css'

var a = false ? 10 : 'mudit';
console.log('this should not be here')

var Logo = () => (
  <div className="logo-container">
    <img className="logo" src={logo} alt="kebabful"/>
  </div>
)

export default Logo
