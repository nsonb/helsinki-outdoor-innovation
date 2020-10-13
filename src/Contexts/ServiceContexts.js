import React, { createContext,  useState } from 'react';
import { 
    getToilets,
    getServices,
    getParking, 
    getTransport
 } from '../Scripts/outdoorAPI';

//services that cannot be searched but will show on toggle
//includes shops, cafes, toilets, bus stops, parking etc.
export const ServiceContext = createContext();
export const ServiceContextProvider = (props) => {
    const [services, setServices] = useState({
        toilets: [],
        transports: [],
        commercial: [],
        parking: []
    });

    const updateServices = () => {
        Promise.all([
            getToilets().then(res => {return {toilets: res}}), 
            getTransport().then(res => {return {transports: res}}), 
            getParking().then(res => {return {parking: res}}), 
            getServices().then(res => {return {commercial: res}})])
        .then(values => {
            setServices({...services, ...values[0], ...values[1], ...values[2], ...values[3]});
        })
    }

    return (
        <ServiceContext.Provider value={{services, updateServices}}>
            {props.children}
        </ServiceContext.Provider>
    );
}