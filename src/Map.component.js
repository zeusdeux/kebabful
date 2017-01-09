import React from 'react'
import './Map.css'

const Map = React.createClass({
  getInitialState () {
    return {
      map: null
    }
  },
  componentDidMount() {
    console.log(document.querySelector('.map'), this.props.gmap)
    const domNode = document.querySelector('.map')
    const BERLIN =  { lat: 52.5074592, lng: 13.2860651 }
    const map = new this.props.gmap.Map(domNode, {
      zoom: 13,
      center: BERLIN,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: this.props.gmap.MapTypeControlStyle.HORIZONTAL_BAR,
        position: this.props.gmap.ControlPosition.RIGHT_BOTTOM
      },
      zoomControl: true,
      zoomControlOptions: {
        style: this.props.gmap.ZoomControlStyle.MEDIUM,
        position: this.props.gmap.ControlPosition.RIGHT_CENTER
      },
      scaleControl: true,
      streetViewControl: true,
      streetViewControlOptions: {
        position: this.props.gmap.ControlPosition.RIGHT_TOP
      },
      panControl: false
    })
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
