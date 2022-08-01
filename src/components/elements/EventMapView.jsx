import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";

function EventMapView({ events }) {

  // Example list of events
  const mockEvents = [
    {latitude: 0, longitude: 14},
    {latitude: 45, longitude: 54},
    {latitude: 40, longitude: 90},
    {latitude: 28, longitude: 4},
  ]

  const [position, setPosition] = useState({center:[18,0], zoom:2.5});

  return (
    <div>
      <Map height={500} center={position.center} zoom={position.zoom} onBoundsChanged={({ newCenter, newZoom }) => setPosition({center: newCenter, zoom: newZoom})}>
        {mockEvents.map((marker) => {
          return (
            <Marker width="30" anchor={[marker.latitude,marker.longitude]}/>
          )
        })
        }
      </Map>
    </div>
  )
}
  
export default EventMapView;