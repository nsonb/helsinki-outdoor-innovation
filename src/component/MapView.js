import React, { useContext } from "react";
import { MapContainer, TileLayer, useMapEvent, setCenter, useMap } from "react-leaflet";
import LocationMarkers from "./LocationMarker";
import { SportsContext } from '../Contexts/SportsContexts';
import LocationMarker from "./LocationMarkerSingle";
import { UIContext } from "../Contexts/UIContext";

const MapView = () => {
  const { sorted } = useContext(SportsContext);
  const { mapSettings } = useContext(UIContext);

  return (
    
    <MapContainer center={mapSettings.coord} zoom={mapSettings.zoom} zoomControl={false}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        id='mapbox/streets-v11'
        accessToken= 'pk.eyJ1IjoibWF0aWFzZWgiLCJhIjoiY2tncWRsend4MDQ1ODJycXdwMmJ4MzZ6dCJ9.mvbD4fDb8KGLjXhhLy0XSA'
      />
      {/*<LocationMarkers/>*/}
      {Object.keys(sorted).map(e => sorted[e].data.map(d => 
        <LocationMarker key={d.id} d={d}/>
      ))}
      <CenterToMarker/>
    </MapContainer>
  );
}

const CenterToMarker = () => {
  const { mapSettings } = useContext(UIContext);
  const map = useMap();

  map.setView(mapSettings.coord, mapSettings.zoom);
  return null;
}

export default MapView;
