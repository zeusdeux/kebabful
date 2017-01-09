import React from 'react'
import './App.css'
import Map from './Map.component.js'
import Details from './Details.component.js'
import Logo from './Logo.component.js'

const App = React.createClass({
  getInitialState() {
    return {
      name: 'name',
      rating: '4',
      description: 'omg kebabs',
      address: 'heard in my life\nboop',
      images: [],
      restaurants: [{name: 'test'}, {name: 'test2'}]
    }
  },
  render() {
    return (
      <div className="kebabful">
        <Logo />
        <Map gmap={window.google.maps} restaurants={this.state.restaurants} />
        <Details name={this.state.name}
                 rating={this.state.rating}
                 description={this.state.description}
                 address={this.state.address}
                 images={this.state.images} />
      </div>
    )
  }
})

export default App
