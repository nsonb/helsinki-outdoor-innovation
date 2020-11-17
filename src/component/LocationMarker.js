import React, {Fragment, useContext, useState} from 'react';
import {Marker, Popup} from 'react-leaflet';
import { SportsContext } from '../Contexts/SportsContexts';
import LocationIcon from './LocationIcon'
import {UIContext} from "../Contexts/UIContext";

const LocationMarker = () => {

    const { sorted } = useContext(SportsContext);
    const { currentLang, toggleModal, selectModalInformation } = useContext(UIContext)

    const markers = Object.keys(sorted).map(e => sorted[e].data.map(d => {
        if (d.latitude !== undefined || d.longitude !== undefined) {

            return (
                <Marker
                    key={d.id}
                    position={[d.latitude, d.longitude]}
                    icon={LocationIcon}
                >
                    <Popup>
                        {currentLang === 'SV' ? d.name_sv || d.name_fi || '' :
                            (currentLang === 'EN' ? d.name_en || d.name_fi || '' :
                                d.name_fi || '')}<br/>
                        <button onClick={() => {
                            toggleModal();
                            selectModalInformation(d)
                        }}>More info
                        </button>
                    </Popup>
                </Marker>
            )
        }}));

    return <Fragment>{markers}</Fragment>

}

export default LocationMarker;
