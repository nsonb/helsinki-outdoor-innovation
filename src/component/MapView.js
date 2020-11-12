import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarkers from "./LocationMarker";

const MapView = () => {
  return (
    
    <MapContainer center={[60.19, 24.94]} zoom={12} zoomControl={false}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        id='mapbox/streets-v11'
        accessToken= 'pk.eyJ1IjoibWF0aWFzZWgiLCJhIjoiY2tncWRsend4MDQ1ODJycXdwMmJ4MzZ6dCJ9.mvbD4fDb8KGLjXhhLy0XSA'
      />
        <LocationMarkers/>
    </MapContainer>
  );
}

export default MapView;
