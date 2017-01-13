import React from 'react'
import './Map.css'
import pinIcon from './icon-pin.png'

const Map = React.createClass({
  getInitialState () {
    const { InfoWindow } = this.props.gmap

    return {
      infoWindow: new InfoWindow({
        content: ''
      })
    }
  },
  componentWillReceiveProps({ BERLIN, restaurants, gmap, showingDetails, map, transition }) {
    restaurants.map(r => {
      const marker = new gmap.Marker({
        position: r.location,
        map: map,
        icon: pinIcon
      })

      marker.addListener('mouseover', () => {
        this.state.infoWindow.setContent(`<p class="info-window">${r.name}<br />${r.rating}/5</p>`)
        this.state.infoWindow.open(map, marker)
      })

      marker.addListener('click', () => {
        map.panTo(marker.position)
        transition({
          currentRestaurant: r,
          showingDetails: true
        })
      })

      marker.addListener('mouseout', () => {
        this.state.infoWindow.close()
      })

      return marker
    })

    if (!showingDetails && map) {
      map.panTo(BERLIN)
      map.setZoom(13)
    }
  },
  componentDidMount() {
    const { BERLIN, gmap, transition } = this.props
    const { Map, ZoomControlStyle, ControlPosition } = gmap
    const domNode = document.querySelector('.map')
    const map = new Map(domNode, {
      zoom: 13,
      center: BERLIN,
      mapTypeControl: false,
      zoomControl: true,
      zoomControlOptions: {
        style: ZoomControlStyle.MEDIUM,
        position: ControlPosition.RIGHT_BOTTOM
      },
      scaleControl: false,
      streetViewControl: false,
      panControl: false
    })

    transition({ map })
  },
  render() {
    const { showingDetails } = this.props
    const classes = 'map ' + (showingDetails ? 'x--two-thirds' : 'x--full-screen')

    return (
      <div className={classes}>
      </div>
    )
  }
})

Map.propTypes = {
  BERLIN: React.PropTypes.object,
  gmap: React.PropTypes.object,
  showingDetails: React.PropTypes.bool,
  transition: React.PropTypes.func,
  restaurants: React.PropTypes.array,
  map: React.PropTypes.object
}

export default Map
