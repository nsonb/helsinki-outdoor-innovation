import React, { createContext,  useState } from 'react';
import { 
    getToilets,
    getServices,
    getParking, 
    getTransport,
    getPlaygrounds,
 } from '../Scripts/outdoorAPI';

//services that cannot be searched but will show on toggle
//includes shops, cafes, toilets, bus stops, parking etc.
export const ServiceContext = createContext();
export const ServiceContextProvider = (props) => {
    const [services, setServices] = useState({
        toilets: [],
        transports: [],
        commercial: [],
        parking: [],
        playgrounds: []
    });
//-getToilets().then(res => {return {toilets: res}}),
    const updateServices = () => {
        Promise.all([
            getToilets().then(res => {return {toilets: res}}),
            getTransport().then(res => {return {transports: res}}), 
            getParking().then(res => {return {parking: res}}), 
            getServices().then(res => {return {commercial: res}}),
            getPlaygrounds().then(res => {return {playgrounds: res}})])
        .then(values => {
            let updated = {};
            values.forEach(e => {
                updated = {...updated, ...e};
            })
            setServices(updated);
        })
    }

    return (
        <ServiceContext.Provider value={{services, updateServices}}>
            {props.children}
        </ServiceContext.Provider>
    );
}