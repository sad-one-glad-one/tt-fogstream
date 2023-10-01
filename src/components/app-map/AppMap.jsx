import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'

import { Icon, divIcon, point } from 'leaflet'

import placeholder from '../../assets/placeholder.png'

const customIcon = new Icon({
  iconUrl: placeholder,
  iconSize: [38, 38],
})

const createClusterCustomIcon = (cluster) =>
  new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: 'custom-marker-cluster',
    iconSize: point(33, 33, true),
  })


const AppMap = () => {
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: 'Маркер 1',
    },
    {
      geocode: [48.85, 2.3522],
      popUp: 'Маркер 2',
    },
    {
      geocode: [48.855, 2.34],
      popUp: 'Маркер 3',
    },
  ]

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13} style={{ width: '100%', height: '80vh' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {markers.map((marker) => (
          <Marker key={marker.popUp} position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  )
}

export default AppMap
