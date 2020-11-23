import React, { useContext } from 'react';
import {Marker} from 'react-leaflet';
import LocationIcon from './LocationIcon';
import HighlightIcon from './HilightIcon';
import {UIContext} from "../Contexts/UIContext";

const LocationMarker = (props) => {
    const { toggleModal, selectModalInformation, centerMap, modalContent } = useContext(UIContext)

    const onClick = () => {
        toggleModal();
        selectModalInformation(props.d);
        centerMap([props.d.latitude, props.d.longitude]);
    }

    const d = props.d;
    if (d.latitude !== undefined || d.longitude !== undefined) {
        return (
            <Marker
                key={d.id}
                position={[d.latitude, d.longitude]}
                icon={d.id === modalContent.id ? HighlightIcon : LocationIcon}
                eventHandlers={{
                    click: (evt) => {
                      onClick(evt)
                    },
                  }}
            >
            </Marker>
        )
    } else {
        return null
    }
}

export default LocationMarker;
