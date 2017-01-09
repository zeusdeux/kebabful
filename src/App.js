import React from 'react'
import './App.css'
import Map from './Map.component.js'
import Details from './Details.component.js'
import Logo from './Logo.component.js'
import { createClient } from 'contentful'

const CTFLTOKEN = '80d7a68286508078bd1fe900eb33b356036725961074e8117630ba5fa3bfd94f'
const SPACEID = 'hgu8v0g652im'
const client = createClient({
  space: SPACEID,
  accessToken: CTFLTOKEN
})

const App = React.createClass({
  getInitialState() {
    client.getEntries().then(entries => {
      const restaurants = entries.items.map(e => {
        e.fields.location.lng = e.fields.location.lon
        return e.fields
      })
      this.setState({
        restaurants
      })
    })
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
