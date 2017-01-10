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
const BERLIN = { lat: 52.5200, lng: 13.4050 }

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
      currentRestaurant: { picturesList: [] },
      showingDetails: false,
      images: [],
      restaurants: [],
      map: null
    }
  },
  handlerMarkerClick(currentRestaurant) {
    this.setState({
      currentRestaurant,
      showingDetails: true
    })
  },
  handleCloseDetails() {
    this.state.map.panTo(BERLIN)
    this.state.map.setZoom(13)
    this.setState({
      currentRestaurant: { picturesList: [] },
      showingDetails: false
    })
  },
  setMap(map) {
    this.setState({ map })
  },
  render() {
    return (
      <div className="kebabful">
        <Logo />
        <Map BERLIN={BERLIN}
             gmap={window.google.maps}
             setMap={this.setMap}
             restaurants={this.state.restaurants}
             handlerMarkerClick={this.handlerMarkerClick}
             showingDetails={this.state.showingDetails} />
        <Details currentRestaurant={this.state.currentRestaurant}
                 handleClose={this.handleCloseDetails}
                 showingDetails={this.state.showingDetails} />
      </div>
    )
  }
})

export default App
