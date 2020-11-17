import L from 'leaflet';

const LocationIcon = L.icon({
    iconUrl: require('../default-img/defaultMarkerBoldest.png'),
    iconRetinaUrl: require('../default-img/defaultMarkerBoldest.png'),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [25, 35],
    className: 'leaflet-venue-icon'
});

export default LocationIcon;
