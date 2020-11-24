import L from 'leaflet';

const LocationIcon = L.icon({
    iconUrl: require('../default-img/defaultMarkerBoldestHighlight.png'),
    iconRetinaUrl: require('../default-img/defaultMarkerBoldestHighlight.png'),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [30, 45],
    className: 'leaflet-venue-icon'
});

export default LocationIcon;
