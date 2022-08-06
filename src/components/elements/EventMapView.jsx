import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";

function EventMapView() {
  // Example list of events
  const mockEvents = [
    { latitude: 0, longitude: 14, id: "event-1" },
    { latitude: 45, longitude: 54, id: "event-2" },
    { latitude: 40, longitude: 90, id: "event-3" },
    { latitude: 28, longitude: 4, id: "event-4" },
  ]

  const [position, setPosition] = useState({
    center: [18,0],
    zoom: 2.5,
  });

  return (
    <div>
      <p>Placeholder Title</p>
      <Map
        height={500}
        center={position.center}
        zoom={position.zoom}
        onBoundsChanged={({ newCenter, newZoom }) => {
          setPosition({
            center: newCenter,
            zoom: newZoom
          })
        }}>
        {mockEvents.map((marker) => {
          return (
            <Marker key={marker.id} width="30" anchor={[marker.latitude,marker.longitude]}/>
          )
        })}
      </Map>
    </div>
  )
}

export default EventMapView;
