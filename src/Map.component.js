import React from 'react'
import './Map.css'

const Map = React.createClass({
  getInitialState () {
    return {
      map: null
    }
  },
  componentDidMount() {
    const BERLIN = {lat: -25.363, lng: 131.044} // { lat: 52.5074592, lng: 13.2860651 }
    const domNode = document.querySelector('.map')
    console.log(domNode)
    const map = new this.props.gmap.Map(domNode, {
      zoom: 4,
      position: BERLIN
    })
    debugger;
    // const marker = new this.props.gmap.Marker({
    //   position: BERLIN,
    //   map
    // })
    this.setState({ map })
  },
  render() {
    return (
      <div className="map x--two-thirds">
      </div>
    )
  }
})

export default Map
