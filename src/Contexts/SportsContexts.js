import React, { createContext,  useState } from 'react';
import * as s from '../Scripts/outdoorAPI';

export const SportsContext = createContext();
export const SportsContextProvider = (props) => {
    const [sports, setSports] = useState({
        archery: {data: [], tags: ['land'], displayname_fi: '', displayname_en: 'Archery'},
        athletics: {data: [], tags: ['land'], displayname_fi: '', displayname_en: 'Athletics'},
        ballFields: {data: [], tags: ['land', 'ballgames'], displayname_fi: '', displayname_en: 'Ball fields'},
        baseball: {data: [], tags: ['land', 'ballgames'], displayname_fi: '', displayname_en: 'Baseball'},
        basketball: {data: [], tags: ['land', 'ballgames'], displayname_fi: '', displayname_en: 'Basketball'},
        beachvolley: {data: [], tags: ['land', 'ballgames'], displayname_fi: '', displayname_en: 'Beach volley'},
        biking: {data: [], tags: ['land'], displayname_fi: '', displayname_en: 'Biking'},
        boatsports: {data: [], tags: ['water'], displayname_fi: '', displayname_en: 'Boat sports'},
        campingLodges: {data: [], tags: ['land', 'nature'], displayname_fi: '', displayname_en: 'Hiking stops, camping and lodges'},
        climbing: {data: [], tags: ['land'], displayname_fi: '', displayname_en: 'Climbing'},
        discGolf: {data: [], tags: ['land'], displayname_fi: '', displayname_en: 'Disc golf'},
        dogActivities: {data: [], tags: ['land', 'animals'], displayname_fi: '', displayname_en: 'Sports to do with a dog'},
        downhillSki: {data: [], tags: ['land', 'winter'], displayname_fi: '', displayname_en: 'Downhill skiing'},
        fishing: {data: [], tags: ['land', 'water', 'animals'], displayname_fi: '', displayname_en: 'fishing'},
        football: {data: [], tags: ['land', 'ballgames'], displayname_fi: '', displayname_en: 'Football'},
        golf: {data: [], tags: ['land', 'ballgames'], displayname_fi: '', displayname_en: 'Golf and minigolf'},
        iceSkate: {data: [], tags: ['land', 'winter'], displayname_fi: '', displayname_en: 'Ice skating'},
        orienteering: {data: [], tags: ['land', 'nature'], displayname_fi: '', displayname_en: 'Orienteering'},
        outdoorGyms: {data: [], tags: ['land'], displayname_fi: 'Ulkokuntosalit ja liikuntapuistot', displayname_en: 'Outdoor gyms and sports parks'},
        parkour: {data: [], tags: ['land'], displayname_fi: '', displayname_en: 'Parkour'},
        parks: {data: [], tags: ['land', 'nature'], displayname_fi: '', displayname_en: 'Parks'},
        rollerHockey: {data: [], tags: ['land'], displayname_fi: '', displayname_en: 'Roller hockey'},
        skating: {data: [], tags: ['land'], displayname_fi: '', displayname_en: 'Skating'},
        skiing: {data: [], tags: ['land', 'winter'], displayname_fi: '', displayname_en: 'Skiing'},
        swimming: {data: [], tags: ['water', 'nature'], displayname_fi: '', displayname_en: 'Swimming'},
        tennis: {data: [], tags: ['land', 'ballgames'], displayname_fi: '', displayname_en: 'Tennis'},
        trailsTracks: {data: [], tags: ['land', 'nature'], displayname_fi: '', displayname_en: 'Trails and tracks'},
        volleyball: {data: [], tags: ['land', 'ballgames'], displayname_fi: '', displayname_en: 'Volleyball'},
        waterSkiing: {data: [], tags: ['water'], displayname_fi: '', displayname_en: 'Water skiing'}
    });
    const [sorted, setSorted] = useState({});

    const updateSports = () => {
        Promise.all([
            s.getArchery().then(res => {return {archery: {data: res}}}), 
            s.getAthletics().then(res => {return {athletics: {data: res}}}), 
            s.getBallFields().then(res => {return {ballFields: {data: res}}}), 
            s.getBaseball().then(res => {return {baseball: {data: res}}}), 
            s.getBasketball().then(res => {return {basketball: {data: res}}}), 
            s.getBeachVolley().then(res => {return {beachvolley: {data: res}}}), 
            s.getBiking().then(res => {return {biking: {data: res}}}), 
            s.getBoatSports().then(res => {return {boatsports: {data: res}}}),
            s.getCampingAndLodges().then(res => {return {campingLodges: {data: res}}}), 
            s.getClimbing().then(res => {return {climbing: {data: res}}}), 
            s.getDiscGolf().then(res => {return {discGolf: {data: res}}}),
            s.getDogActivities().then(res => {return {dogActivities: {data: res}}}),
            s.getDownhillSki().then(res => {return {downhillSki: {data: res}}}),
            s.getFishing().then(res => {return {fishing: {data: res}}}),
            s.getFootball().then(res => {return {football: {data: res}}}), 
            s.getGolf().then(res => {return {golf: {data: res}}}),
            s.getIceSkate().then(res => {return {iceSkate: {data: res}}}),
            s.getOrienteering().then(res => {return {orienteering: {data: res}}}),
            s.getOutdoorGyms().then(res => {return {outdoorGyms: {data: res}}}),
            s.getParkour().then(res => {return {parkour: {data: res}}}),
            s.getParks().then(res => {return {parks: {data: res}}}),
            s.getRollerHockey().then(res => {return {rollerHockey: {data: res}}}),
            s.getSkating().then(res => {return {skating: {data: res}}}),
            s.getSki().then(res => {return {skiing: {data: res}}}),
            s.getSwimming().then(res => {return {swimming: {data: res}}}),
            s.getTennis().then(res => {return {tennis: {data: res}}}), 
            s.getTrailsAndTracks().then(res => {return {trailsTracks: {data: res}}}),
            s.getVolleyball().then(res => {return {volleyball: {data: res}}}), 
            s.getWaterSki().then(res => {return {waterSkiing: {data: res}}})
        ])
        .then(values => {
            let updated = {};
            values.forEach(e => {
                const sportname = Object.keys(e)[0]
                e[sportname].tags = sports[sportname].tags;
                e[sportname].displayname_en = sports[sportname].displayname_en;
                e[sportname].displayname_fi = sports[sportname].displayname_fi;
                updated = {...updated, ...e};
            })
            setSports(updated);
        })
    }

    //name = search words
    const searchOneSport = (name) => {
        //clean up the search words and separate "must have"
        const cleanString = name.replace(',', '').replace('.', '').toLowerCase();
        let nameList = [];
        let mustHave = cleanString.match(/"([^"]+)"/);
        if (mustHave) {
            mustHave = mustHave[1].split(' ');
            nameList = cleanString.replace('"' + mustHave + '"', '').split(' ').filter(e => e !== '');
        } else {
            mustHave = [];
            nameList = cleanString.split(' ');
        }

        let newList = {}, key;
        for (key in sports) {
            //create keywords from tags and displayname (from front end)
            const name_en = sports[key].displayname_en.toLowerCase().split(' ');
            const name_fi = sports[key].displayname_fi.toLowerCase().split(' ');
            let list = [...sports[key].tags, ...name_en, ...name_fi];
            let keywords = list.filter(e => e !== 'and' && e !== '' && e!== 'ja');
                
            let matchingData = [];
            for (let i = 0; i < sports[key].data.length; i++) {
                const e = sports[key].data[i];
                //new keywords from the data from the DB
                const nameData = [
                    e.name_fi || '', 
                    e.name_sv || '', 
                    e.name_en || ''];
                const locationNames = [
                    e.street_address_fi || '', 
                    e.street_address_sv || '', 
                    e.street_address_en || '', 
                    e.address_city_fi || '',
                    e.address_city_sv ||'',
                    e.address_city_en || ''];
                list = [...nameData, ...locationNames];
                let uniqueWords = list.toString().toLowerCase().split(/(?:,| )+/);
                uniqueWords = uniqueWords.filter(e => e !== 'and' && e !== '' && e!== 'ja' && 'och' && '/');

                //if there is "must have" -words, only accept those that have ALL of them
                if (mustHave.length > 0) {
                    const dataMatches = mustHave.filter(e => [...uniqueWords, ...keywords].includes(e));
                    if (arrayEquals(dataMatches, mustHave)) {
                        matchingData = [...matchingData, e]
                        console.log(dataMatches)
                    }
                //else, accept anything with at least 1 word from the search
                } else {
                    const dataMatches = nameList.filter(e => [...uniqueWords, ...keywords].includes(e));
                    if (dataMatches.length > 0) {
                        matchingData = [...matchingData, e]
                        console.log(dataMatches)
                    }
                }   
            }
            //place matching location items into the data slots of the sport category
            if (matchingData.length > 0) {
                newList[key] = sports[key];
                newList[key].data = matchingData;
            }
                    
        }
        //put all this into "sorted" -hook
        setSorted(newList);
    }

    //tags = labels we add ourselves in the app
    const sortTheSports = (tag) => {
        let newList = {}, key;
        for (key in sports) {
            if (sports[key].tags && sports[key].tags.includes(tag)) {
               newList[key] = sports[key]
            }
        }
        setSorted(newList);      
    }

    //https://masteringjs.io/tutorials/fundamentals/compare-arrays
    const arrayEquals = (a, b) => {
        return Array.isArray(a) &&
          Array.isArray(b) &&
          a.length === b.length &&
          a.every((val, index) => val === b[index]);
      }

    return (
        <SportsContext.Provider value={{sports, updateSports, sorted, searchOneSport, sortTheSports}}>
            {props.children}
        </SportsContext.Provider>
    );
}