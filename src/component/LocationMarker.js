import React, {Fragment, useContext, useState} from 'react';
import {Marker, Popup} from 'react-leaflet';
import { SportsContext } from '../Contexts/SportsContexts';
import LocationIcon from './LocationIcon'
import DetailedInfoModal from "./DetailedInfoModal";

const LocationMarker = () => {

    const [status, setStatus] = useState(false);
    const { sorted } = useContext(SportsContext);
    const markers = Object.keys(sorted).map(e => sorted[e].data.map(d => {
        return (
            <Marker
            key={d.id}
            position={[d.latitude, d.longitude]}
            icon={LocationIcon}
            >
                <Popup>
                    {d.name_en || d.name_fi || d.name_sv}<br/>
                    <button onClick={() => status === false ? setStatus(true) : null }>More info</button>
                    { status && (<DetailedInfoModal closeModal={() => setStatus(false)} location = {d}/>)}
                </Popup>
            </Marker>
        )
    }));

    return <Fragment>{markers}</Fragment>

}

export default LocationMarker;
