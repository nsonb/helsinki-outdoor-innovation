import React, { createContext,  useState } from 'react';
import * as s from '../Scripts/outdoorAPI';

//services that cannot be searched but will show on toggle
//includes shops, cafes, toilets, bus stops, parking etc.
export const SportsContext = createContext();
export const SportsContextProvider = (props) => {
    const [sports, setSports] = useState({
        archery: [],
        athletics: [],
        biking: [],
        boatsports: [],
        campingLodges: [],
        climbing: [],
        discGolf: [],
        dogActivities: [],
        downhillSki: [],
        fishing: [],
        golf: [],
        iceSkate: [],
        orienteering: [],
        outdoorGyms: [],
        parkour: [],
        parks: [],
        rollerHockey: [],
        skating: [],
        skiing: [],
        swimming: [],
        trailsTracks: [],
        waterSkiing: []
    });

    const updateSports = () => {
        console.log('context')
        Promise.all([
            s.getArchery().then(res => {return {archery: res}}), 
            s.getAthletics().then(res => {return {athletics: res}}), 
            s.getBiking().then(res => {return {biking: res}}), 
            s.getBoatSports().then(res => {return {boatsports: res}}),
            s.getCampingAndLodges().then(res => {return {campingLodges: res}}), 
            s.getClimbing().then(res => {return {climbing: res}}), 
            s.getDiscGolf().then(res => {return {discGolf: res}}),
            s.getDogActivities().then(res => {return {dogActivities: res}}),
            s.getDownhillSki().then(res => {return {downhillSki: res}}),
            s.getFishing().then(res => {return {fishing: res}}),
            s.getGolf().then(res => {return {golf: res}}),
            s.getIceSkate().then(res => {return {iceSkate: res}}),
            s.getOrienteering().then(res => {return {orienteering: res}}),
            s.getOutdoorGyms().then(res => {return {outdoorGyms: res}}),
            s.getParkour().then(res => {return {parkour: res}}),
            s.getParks().then(res => {return {parks: res}}),
            s.getRollerHockey().then(res => {return {rollerHockey: res}}),
            s.getSkating().then(res => {return {skating: res}}),
            s.getSki().then(res => {return {skiing: res}}),
            s.getSwimming().then(res => {return {swimming: res}}),
            s.getTrailsAndTracks().then(res => {return {trailsTracks: res}}),
            s.getWaterSki().then(res => {return {waterSkiing: res}})
        ])
        .then(values => {
            let updated = {};
            values.forEach(e => {
                updated = {...updated, ...e};
            })
            setSports(updated);
        })
    }

    return (
        <SportsContext.Provider value={{sports, updateSports}}>
            {props.children}
        </SportsContext.Provider>
    );
}