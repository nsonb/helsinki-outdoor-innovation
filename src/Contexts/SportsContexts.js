import React, { createContext,  useState } from 'react';
import * as s from '../Scripts/outdoorAPI';

export const SportsContext = createContext();
export const SportsContextProvider = (props) => {
    const [sports, setSports] = useState({
        archery: {data: [], tags: ['land'], displayname_fi: 'Jousiammunta', displayname_en: 'Archery', displayname_sv: ''},
        athletics: {data: [], tags: ['land'], displayname_fi: 'Yleisurheilu', displayname_en: 'Athletics', displayname_sv: ''},
        ballFields: {data: [], tags: ['land', 'ballgames'], displayname_fi: 'Pallokentät', displayname_en: 'Ball fields', displayname_sv: ''},
        baseball: {data: [], tags: ['land', 'ballgames'], displayname_fi: 'Pesäpallo', displayname_en: 'Baseball', displayname_sv: ''},
        basketball: {data: [], tags: ['land', 'ballgames'], displayname_fi: 'Koripallo', displayname_en: 'Basketball', displayname_sv: ''},
        beachvolley: {data: [], tags: ['land', 'ballgames'], displayname_fi: 'Rantalentopallo', displayname_en: 'Beach volley', displayname_sv: ''},
        biking: {data: [], tags: ['land'], displayname_fi: 'Pyöräily', displayname_en: 'Biking', displayname_sv: ''},
        boatsports: {data: [], tags: ['water'], displayname_fi: 'Veneurheilu', displayname_en: 'Boat sports', displayname_sv: ''},
        campingLodges: {data: [], tags: ['land', 'nature', 'noEquipment'], displayname_fi: 'Patikointi ja levähdyspaikat', displayname_en: 'Hiking stops, camping and lodges', displayname_sv: ''},
        climbing: {data: [], tags: ['land'], displayname_fi: 'Kiipeily', displayname_en: 'Climbing', displayname_sv: ''},
        discGolf: {data: [], tags: ['land'], displayname_fi: 'Frisbeegolf', displayname_en: 'Disc golf', displayname_sv: ''},
        dogActivities: {data: [], tags: ['land', 'animals'], displayname_fi: 'Liikunta koiran kanssa', displayname_en: 'Sports to do with a dog', displayname_sv: ''},
        downhillSki: {data: [], tags: ['land', 'winter'], displayname_fi: 'Laskettelu', displayname_en: 'Downhill skiing', displayname_sv: ''},
        fishing: {data: [], tags: ['land', 'water', 'animals'], displayname_fi: 'Kalastus', displayname_en: 'Fishing', displayname_sv: ''},
        football: {data: [], tags: ['land', 'ballgames'], displayname_fi: 'Jalkapallo', displayname_en: 'Football', displayname_sv: ''},
        golf: {data: [], tags: ['land', 'ballgames'], displayname_fi: 'Golf ja minigolf', displayname_en: 'Golf and minigolf', displayname_sv: ''},
        iceSkate: {data: [], tags: ['land', 'winter'], displayname_fi: 'Luistelu', displayname_en: 'Ice skating', displayname_sv: ''},
        orienteering: {data: [], tags: ['land', 'nature', 'noEquipment'], displayname_fi: 'Suunnistus', displayname_en: 'Orienteering', displayname_sv: ''},
        outdoorGyms: {data: [], tags: ['land', 'noEquipment'], displayname_fi: 'Ulkokuntosalit ja liikuntapuistot', displayname_en: 'Outdoor gyms and sports parks', displayname_sv: ''},
        parkour: {data: [], tags: ['land', 'noEquipment'], displayname_fi: 'Parkour', displayname_en: 'Parkour', displayname_sv: ''},
        parks: {data: [], tags: ['land', 'nature', 'noEquipment'], displayname_fi: 'Puistot', displayname_en: 'Parks', displayname_sv: ''},
        rollerHockey: {data: [], tags: ['land'], displayname_fi: 'Rullakiekko', displayname_en: 'Roller hockey', displayname_sv: ''},
        skating: {data: [], tags: ['land'], displayname_fi: 'Skeittaus ja rullaluistelu', displayname_en: 'Skating', displayname_sv: ''},
        skiing: {data: [], tags: ['land', 'winter'], displayname_fi: 'Hiihto', displayname_en: 'Skiing', displayname_sv: ''},
        swimming: {data: [], tags: ['water', 'nature', 'noEquipment'], displayname_fi: 'Uinti', displayname_en: 'Swimming', displayname_sv: ''},
        tennis: {data: [], tags: ['land', 'ballgames'], displayname_fi: 'Tennis', displayname_en: 'Tennis', displayname_sv: ''},
        trailsTracks: {data: [], tags: ['land', 'nature', 'noEquipment'], displayname_fi: 'Reitit ja polut', displayname_en: 'Trails and tracks', displayname_sv: ''},
        volleyball: {data: [], tags: ['land', 'ballgames'], displayname_fi: 'Lentopallo', displayname_en: 'Volleyball', displayname_sv: ''},
        waterSkiing: {data: [], tags: ['water'], displayname_fi: 'Vesihiihto', displayname_en: 'Water skiing', displayname_sv: ''}
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
        console.log(name)
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
            const tags = sports[key].tags.map(t => {return t.toLowerCase()});
            let list = [...tags, ...name_en, ...name_fi];
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
                const descriptions = [
                    e.desc_fi || '',
                    e.desc_sv || '',
                    e.desc_en || ''
                ]
                list = [...nameData, ...locationNames, ...descriptions, e.id];
                let uniqueWords = list.toString().toLowerCase().split(/(?:,| )+/);
                uniqueWords = uniqueWords.filter(e => e !== 'and' && e !== '' && e!== 'ja' && 'och' && '/');

                //if there is "must have" -words, only accept those that have ALL of them
                if (mustHave.length > 0) {
                    const dataMatches = mustHave.filter(e => [...uniqueWords, ...keywords].includes(e));
                    if (arrayEquals(dataMatches, mustHave)) {
                        matchingData = [...matchingData, e]
                    }
                //else, accept anything with at least 1 word from the search
                } else {
                    const dataMatches = nameList.filter(e => [...uniqueWords, ...keywords].includes(e));
                    if (dataMatches.length > 0) {
                        matchingData = [...matchingData, e]
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
            if (sports[key].tags.includes(tag)) {
               newList[key] = sports[key]
            }
        }
        setSorted(newList);      
    }

    const filterByTags = (tags) => {
        let newList = {}, key;
        for (key in sports) {
            const sportTags = sports[key].tags
            if (tags.every(e => sportTags.includes(e))) {
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
        <SportsContext.Provider value={{sports, updateSports, sorted, searchOneSport, sortTheSports, filterByTags}}>
            {props.children}
        </SportsContext.Provider>
    );
}