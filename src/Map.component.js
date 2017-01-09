import React from 'react'
import './Map.css'

const BERLIN = { lat: 52.5200, lng: 13.4050 }
const Map = React.createClass({
  getInitialState () {
    return {
      map: null,
      markers: [],
      infoWindow: new this.props.gmap.InfoWindow({
        content: ''
      })
    }
  },
  componentWillReceiveProps(nextProps) {
    const markers = nextProps.restaurants.map(r => {
      const marker = new nextProps.gmap.Marker({
        position: r.location,
        map: this.state.map
      })

      marker.addListener('click', () => {
        this.state.infoWindow.setContent(`<p class="info-window">${r.name}<br />${r.rating}/5</p>`)
        this.state.infoWindow.open(this.state.map, marker)
        this.state.map.panTo(marker.position)
        nextProps.handlerMarkerClick(r)
      })

      this.state.infoWindow.addListener('closeclick', () => {
        if (nextProps.showingDetails) nextProps.closeDetails()
      })
      return marker
    })

    this.setState({ markers })
  },
  componentDidMount() {
    const domNode = document.querySelector('.map')
    const map = new this.props.gmap.Map(domNode, {
      zoom: 13,
      center: BERLIN,
      mapTypeControl: false,
      zoomControl: true,
      zoomControlOptions: {
        style: this.props.gmap.ZoomControlStyle.MEDIUM,
        position: this.props.gmap.ControlPosition.RIGHT_BOTTOM
      },
      scaleControl: false,
      streetViewControl: false,
      panControl: false
    })

    this.setState({ map })
  },
  render() {
    const classes = 'map ' + (this.props.showingDetails ? 'x--two-thirds' : 'x--full-screen')

    return (
      <div className={classes}>
      </div>
    )
  }
})

export default Map
