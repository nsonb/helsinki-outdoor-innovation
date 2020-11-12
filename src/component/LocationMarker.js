import React, {Fragment, useContext} from 'react';
import {Marker, Popup} from 'react-leaflet';
import { SportsContext } from '../Contexts/SportsContexts';
import LocationIcon from './LocationIcon'

const LocationMarker = () => {

    const { sorted } = useContext(SportsContext);
    const markers = Object.keys(sorted).map(e => sorted[e].data.map(d => {
        return (
            <Marker
            key={d.id}
            position={[d.latitude, d.longitude]}
            icon={LocationIcon}
            >
                <Popup>Testing</Popup>
            </Marker>
        )
    }));

    return <Fragment>{markers}</Fragment>

}

export default LocationMarker;
