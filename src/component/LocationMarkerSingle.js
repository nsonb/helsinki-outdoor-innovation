import React, { useContext } from 'react';
import {Marker} from 'react-leaflet';
//import LocationIcon from './LocationIcon';
import * as markers from './LocationIcons';
import {UIContext} from "../Contexts/UIContext";
import { marker } from 'leaflet';

const LocationMarker = (props) => {
    const { toggleModal, selectModalInformation, centerMap, modalContent } = useContext(UIContext)
    const d = props.d;

    const onClick = () => {
        toggleModal();
        selectModalInformation(d);
        centerMap([d.latitude, d.longitude]);
    }
    
    const markerIcon = () => {
        if (d.id === modalContent.id) {
            return markers.HighlightIcon
        } else {
            switch(props.servicename) {
                case 'toilets':
                    return markers.ToiletIcon;
                case 'parking':
                    return markers.ParkingIcon;
                case 'playgrounds':
                    return markers.PlaygroundIcon;
                default:
                    return markers.LocationIcon;
            }
        }
    }

    if (d.latitude !== undefined || d.longitude !== undefined) {
        return (
            <Marker
                key={d.id}
                position={[d.latitude, d.longitude]}
                icon={markerIcon()}
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
