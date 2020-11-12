import L from 'leaflet';

const LocationIcon = L.icon({
    iconUrl: require('../default-img/marker.svg.png'),
    iconRetinaUrl: require('../default-img/marker.svg.png'),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: 'leaflet-venue-icon'
});

export default LocationIcon;
