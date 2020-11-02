import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const MapView = () => {
  return (
    <MapContainer center={[60.19, 24.94]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default MapView;