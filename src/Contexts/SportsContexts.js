import React, { createContext,  useState } from 'react';
import * as s from '../Scripts/outdoorAPI';

export const SportsContext = createContext();
export const SportsContextProvider = (props) => {
    const [status, setStatus] = useState({
        downloading: false
    });
    const [sports, setSports] = useState({
        archery: {data: [], tags: ['land', 'jousiammunta', 'archery', 'shooting'], 
            displayname_fi: 'Jousiammunta', displayname_en: 'Archery', displayname_sv: ''},
        athletics: {data: [], tags: ['land'], 
            displayname_fi: 'Yleisurheilu', displayname_en: 'Athletics', displayname_sv: ''},
        ballFields: {data: [], tags: ['land', 'ballgames', 'tennis', 'jalkapallo', 'pesäpallo', 'koripallo', 'football', 'baseball', 'basketball', 'pallopelit'], 
            displayname_fi: 'Pallokentät', displayname_en: 'Ball fields', displayname_sv: ''},
        baseball: {data: [], tags: ['land', 'ballgames', 'pesäpallo', 'baseball', 'pesis'], 
            displayname_fi: 'Pesäpallo', displayname_en: 'Baseball', displayname_sv: ''},
        basketball: {data: [], tags: ['land', 'ballgames', 'basketball', 'koripallo', 'koris'], 
            displayname_fi: 'Koripallo', displayname_en: 'Basketball', displayname_sv: ''},
        beachvolley: {data: [], tags: ['land', 'ballgames', 'beachvolley', 'volleyball', 'rantalentopallo', 'rantalentis', 'lentopallo'], 
            displayname_fi: 'Rantalentopallo', displayname_en: 'Beach volley', displayname_sv: ''},
        biking: {data: [], tags: ['land', 'bike', 'bicycle', 'cycle', 'cycling', 'pyörä', 'polkupyörä', 'pyöräily', 'pyöräreitti'], 
            displayname_fi: 'Pyöräily', displayname_en: 'Biking', displayname_sv: ''},
        boatsports: {data: [], tags: ['water'], 
            displayname_fi: 'Veneurheilu', displayname_en: 'Boat sports', displayname_sv: ''},
        campingLodges: {data: [], tags: ['land', 'nature', 'noEquipment'], 
            displayname_fi: 'Patikointi ja levähdyspaikat', displayname_en: 'Hiking stops, camping and lodges', displayname_sv: ''},
        climbing: {data: [], tags: ['land','bouldering', 'climb', 'climbing', 'rock', 'climbingrock', 'rockclimbing', 'wallclimbing', 'climbingwall', 'boulderointi', 'boulder', 'kiipeily', 'kalliokiipeily', 'seinäkiipeily', 'kiipeilyseinä'], 
            displayname_fi: 'Kiipeily', displayname_en: 'Climbing', displayname_sv: ''},
        discGolf: {data: [], tags: ['land'], 
            displayname_fi: 'Frisbeegolf', displayname_en: 'Disc golf', displayname_sv: ''},
        dogActivities: {data: [], tags: ['land', 'animals', 'agility', 'dogpark', 'dogbeach', 'dogs', 'agility', 'koirapuisto', 'koiraranta', 'koirauimaranta', 'koirat'], 
            displayname_fi: 'Liikunta koiran kanssa', displayname_en: 'Sports to do with a dog', displayname_sv: ''},
        downhillSki: {data: [], tags: ['land', 'winter', 'sledding', 'downhillskiing', 'hill', 'pulkkamäki', 'laskettelu', 'mäenlasku', 'pulkka'], 
            displayname_fi: 'Laskettelu', displayname_en: 'Downhill skiing', displayname_sv: ''},
        fishing: {data: [], tags: ['land', 'water', 'animals', 'fishing', 'icefishing', 'kalastus', 'kalastaminen', 'uistelu', 'uisteleminen', 'onkiminen', 'onginta', 'pilkkiminen', 'pilkintä'], 
            displayname_fi: 'Kalastus', displayname_en: 'Fishing', displayname_sv: ''},
        football: {data: [], tags: ['land', 'ballgames', 'football', 'footballfield', 'jalkapallo', 'futis', 'jalkapallokenttä'], 
            displayname_fi: 'Jalkapallo', displayname_en: 'Football', displayname_sv: ''},
        golf: {data: [], tags: ['land', 'ballgames'], 
            displayname_fi: 'Golf ja minigolf', displayname_en: 'Golf and minigolf', displayname_sv: ''},
        iceSkate: {data: [], tags: ['land', 'winter', 'luistelu', 'skating', 'ice', 'iceskating', 'hockey','jää', 'jääkiekko', 'jääpallo', 'ringette', 'retkiluistelu'], 
            displayname_fi: 'Luistelu', displayname_en: 'Ice skating', displayname_sv: ''},
        orienteering: {data: [], tags: ['land', 'nature', 'noEquipment', 'orienteering', 'sunnistus', 'suunnistaminen', 'suunnistusmetsä'], 
            displayname_fi: 'Suunnistus', displayname_en: 'Orienteering', displayname_sv: ''},
        outdoorGyms: {data: [], tags: ['land', 'noEquipment', 'gym', 'outdoorgym', 'kuntosali', 'ulkokuntosali', 'liikuntaväline', 'treenaus', 'kuntoilu', 'exercise'], 
            displayname_fi: 'Ulkokuntosalit ja liikuntapuistot', displayname_en: 'Outdoor gyms and sports parks', displayname_sv: ''},
        parkour: {data: [], tags: ['land', 'noEquipment'], 
            displayname_fi: 'Parkour', displayname_en: 'Parkour', displayname_sv: ''},
        parks: {data: [], tags: ['land', 'nature', 'noEquipment', 'walking', 'running', 'jogging', 'yoga', 'parkyoga', 'juoksu', 'juokseminen', 'lenkkeily', 'lenkkeileminen', 'kävely', 'käveleminen puistojumppa', 'puistojooga', 'piknik'], 
            displayname_fi: 'Puistot', displayname_en: 'Parks', displayname_sv: ''},
        rollerHockey: {data: [], tags: ['land'], 
            displayname_fi: 'Rullakiekko', displayname_en: 'Roller hockey', displayname_sv: ''},
        skating: {data: [], tags: ['land', 'skateboarding', 'skateboard', 'skatepark', 'bmx', 'rullalautailu', 
        'skeittaus', 'skeitti', 'skeittipuisto', 'rullaluistelu', 'rullalautapuisto'], 
            displayname_fi: 'Skeittaus ja rullaluistelu', displayname_en: 'Skating', displayname_sv: ''},
        skiing: {data: [], tags: ['land', 'winter', 'cross-country', 'skiing', 'hiihto', 'hiihtäminen', 'murtomaahiihto', 'maastohiihto'], 
            displayname_fi: 'Hiihto', displayname_en: 'Skiing', displayname_sv: ''},
        swimming: {data: [], tags: ['water', 'nature', 'noEquipment', 'beach', 'swim', 'swimming', 'ranta', 'uinti', 'uiminen'], 
            displayname_fi: 'Uinti', displayname_en: 'Swimming', displayname_sv: ''},
        tennis: {data: [], tags: ['land', 'ballgames', 'tennis'], 
            displayname_fi: 'Tennis', displayname_en: 'Tennis', displayname_sv: ''},
        trailsTracks: {data: [], tags: ['land', 'nature', 'noEquipment', 'run', 'running', 'walking','jogging', 'juoksu', 'juokseminen', 'lenkkeily', 'lenkkeileminen', 'kävely', 'käveleminen'], 
            displayname_fi: 'Reitit ja polut', displayname_en: 'Trails and tracks', displayname_sv: ''},
        volleyball: {data: [], tags: ['land', 'ballgames', 'lentopallo', 'volleyball'], 
            displayname_fi: 'Lentopallo', displayname_en: 'Volleyball', displayname_sv: ''},
        waterSkiing: {data: [], tags: ['water'], 
            displayname_fi: 'Vesihiihto', displayname_en: 'Water skiing', displayname_sv: ''}
    });
    const [sorted, setSorted] = useState({});
    const [allSuggestions, setSuggestions] = useState([]);

    const updateSports = async () => {
        setStatus({downloading: true});
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
            setStatus({downloading: true});
            allPossibleSuggestions(updated, 'EN');
            return true;
        })
    }

    //name = search words
    const searchOneSport = (name) => {
        //clean up the search words and separate "must have"
        const cleanString = name.replace(',', '').replace('.', '').toLowerCase();
        let nameList = [];
        let mustHave = cleanString.match(/"([^"]+)"/);
        if (mustHave) {
            
            mustHave = mustHave[1].split(' ').filter(e => e !== '' && e !== 'and' && e !== '' && e!== 'ja' && e !== 'och' && e !== '/');
            nameList = cleanString.replace('"' + mustHave + '"', '').split(' ');
        } else {
            mustHave = [];
            nameList = cleanString.split(' ');
        }
        nameList = nameList.filter(e => e !== '' && e !== 'and' && e !== '' && e!== 'ja' && e !== 'och' && e !== '/');

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
                uniqueWords = uniqueWords.filter(e => e !== 'and' && e !== '' && e!== 'ja' && e !== 'och' && e !== '/');

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

    const filterTagsAndCities = (filterObj) => {
        //first filter by tags
        let newList = {}, key;
        for (key in sports) {
            const sportTags = sports[key].tags
            if (filterObj.tags.every(e => sportTags.includes(e))) {
                newList[key] = sports[key]
            }
        }
        //then sort the left over items by location
        for (key in newList) {
            let matchingData = [];
            for (let i = 0; i < sports[key].data.length; i++) {
                const location = sports[key].data[i].address_city_fi || '';
                if (filterObj.cities.includes(location.toLowerCase())) {
                    matchingData.push(sports[key].data[i]);
                }
            }
            newList[key].data = matchingData;
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
    
      const allPossibleSuggestions = (sports, l) => {
        if (!l) l = 'FI';
        console.log(sports)
        //const l = language.filter(e => e.langUsed)[0];
        let sportlist = [];
        //names of the sports from keys and display names
        Object.keys(sports).forEach(sport => {
          sportlist.push({name: sport, category: 'Sports'});
          switch (l) {
            case 'EN':
                sports[sport].displayname_en && sportlist.push({name: sports[sport].displayname_en, category: 'Sports'});
                break;
            case 'FI':
                sports[sport].displayname_fi && sportlist.push({name: sports[sport].displayname_fi, category: 'Sports'});
                break;
            case 'SV':
                sports[sport].displayname_sv && sportlist.push({name: sports[sport].displayname_sv, category: 'Sports'});
                break;
            default:
                break;
          }
          //tags
          sports[sport].tags.forEach(t => sportlist.push({name: t, category: 'Tags'}));
          //names of the locations from data items, e.g. individual locations
          sports[sport].data.forEach(item => {
            switch (l) {
                case 'EN':
                    item.name_en ? sportlist.push({name: item.name_en, category: 'itemNames', id: item.id})
                        : sportlist.push({name: item.name_fi, category: 'itemNames', id: item.id});
                    break;
                case 'FI':
                    item.name_fi && sportlist.push({name: item.name_fi, category: 'itemNames', id: item.id});
                    break;
                case 'SV':
                    item.name_sv ? sportlist.push({name: item.name_sv, category: 'itemNames', id: item.id}) 
                        : sportlist.push({name: item.name_fi, category: 'itemNames', id: item.id});
                    break;
                default:
                    break;
              }
          })
        })
        
        const cleanSportlist = removeDuplicatesFromArrayByProperty(sportlist, 'name');
        console.log(cleanSportlist);
        setSuggestions(cleanSportlist);
      }

      const removeDuplicatesFromArrayByProperty = (arr, prop) => arr.reduce((accumulator, currentValue) => {
        if(!accumulator.find(obj => obj[prop] === currentValue[prop])){
          accumulator.push(currentValue);
        }
        return accumulator;
      }, [])

    return (
        <SportsContext.Provider value={{sports, updateSports, 
                                        sorted, searchOneSport, sortTheSports, filterByTags, filterTagsAndCities, 
                                        allSuggestions, allPossibleSuggestions,
                                        status}}>
            {props.children}
        </SportsContext.Provider>
    );
}