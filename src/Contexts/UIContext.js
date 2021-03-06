import React, { createContext,  useState } from 'react';

//languages, suggestion lists and icon reference here?
export const UIContext = createContext();
export const UIContextProvider = (props) => {
    const [ language, setLang ] = useState([
        {lang: 'EN',
        langUsed: false},
        {lang: 'FI',
        langUsed: true},
        {lang: 'SV',
        langUsed: false},
    ]);

    const [ currentLang, setCurrent ] = useState('FI');

    const [ searchSuggestions, setSuggestions ] = useState([
        {name: "noEquipment",
        category: "Categories",},
        {name: "nature",
        category: "Categories"},
        {name: "ballgames",
        category: "Categories"},
        {name: "water",
        category: "Categories"},
        {name: "land",
        category: "Categories"},
        {name: "winter",
        category: "Categories"},
        {name: "animals",
        category: "Categories"},
        {name: "services",
        category: "Categories"},
        {name: 'Espoo',
        category: 'city'},
        {name: 'Helsinki',
        category: 'city'},
        {name: 'Vantaa',
        category: 'city'}
    ])
    const [ showModal, setModal ] = useState(false);
    const [ modalContent, setModalContent ] = useState({});

    const [ weatherDescriptions ] = useState({
        '01d': {FI: 'Selkeää', EN: 'Clear sky', SV: 'Klar himmel'},
        '02d': {FI: 'Puolipilvistä', EN: 'A few clouds', SV: 'Halvmulet'},
        '03d': {FI: 'Hajanaisia pilviä', EN: 'Scattered clouds', SV: 'Spridda moln'},
        '04d': {FI: 'Rakoileva pilvipeite', EN: 'Broken clouds', SV: 'Lättande molntäcke'},
        '09d': {FI: 'Kevyttä sadetta', EN: 'Shower rain', SV: 'Duggregn'},
        '10d': {FI: 'Sadetta', EN: 'Rain', SV: 'Regn'},
        '11d': {FI: 'Ukkosta', EN: 'Thunderstorm', SV: 'Åskvader'},
        '13d': {FI: 'Lumisade', EN: 'Snow', SV: 'Snö'},
        '50d': {FI: 'Sumua', EN: 'Mist', SV: 'Dimma'},
        '01n': {FI: 'Selkeää', EN: 'Clear sky', SV: 'Klar himmel'},
        '02n': {FI: 'Puolipilvistä', EN: 'A few clouds', SV: 'Halvmulet'},
        '03n': {FI: 'Hajanaisia pilviä', EN: 'Scattered clouds', SV: 'Spridda moln'},
        '04n': {FI: 'Rakoileva pilvipeite', EN: 'Broken clouds', SV: 'Lättande molntäcke'},
        '09n': {FI: 'Kevyttä sadetta', EN: 'Shower rain', SV: 'Duggregn'},
        '10n': {FI: 'Sadetta', EN: 'Rain', SV: 'Regn'},
        '11n': {FI: 'Ukkosta', EN: 'Thunderstorm', SV: 'Åskvader'},
        '13n': {FI: 'Lumisade', EN: 'Snow', SV: 'Snö'},
        '50n': {FI: 'Sumua', EN: 'Mist', SV: 'Dimma'}
    })

    const [ filter, setFilter ] = useState({
        tags: { 
            land: {status: false, icon: '', FI: 'Kuivalla maalla', EN: 'Land sports', SV: 'Land sport'},
            water: {status: false, icon: '', FI: 'Vesiurheilu', EN: 'Water sports', SV: 'Vattensport'},
            animals: {status: false, icon: '', FI: 'Eläinurheilu', EN: 'Animal sports', SV: 'Sport med djur'},
            ballgames: {status: false, icon: '', FI: 'Pallopelit', EN: 'Ball games', SV: 'Bollsport'},
            nature: {status: false, icon: '', FI: 'Luonto', EN: 'Nature', SV: 'Natur'},
            noEquipment: {status: false, icon: '', FI: 'Ei välineitä', EN: 'No equipment', SV: 'Inga sportutrustning'},
            winter: {status: false, icon: '', FI: 'Talviurheilu', EN: 'Winter sports', SV: 'Vintersport'},
        },
        cities: {
            helsinki: {status: false, icon: '', FI: 'Helsinki', EN: 'Helsinki', SV: 'Helsingfors'},
            espoo: {status: false, icon: '', FI: 'Espoo', EN: 'Espoo', SV: 'Esbo'},
            vantaa: {status: false, icon: '', FI: 'Vantaa', EN: 'Vantaa', SV: 'Vanda'},
        },
    })

    const [ mapSettings, setMap ] = useState({
        centerUser: true,
        coord: [60.19, 24.94],
        zoom: 12
    });

    const [ showServices, setShowServices ] = useState({
        toilets: {status: false, FI: 'WC:t', EN: 'Toilets', SV: 'Toaletter'},
        transports: {status: false, FI: 'Pysäkit', EN: 'Public transport', SV: 'Hållplatser'},
        commercial: {status: false, FI: 'Palvelut', EN: 'Services', SV: 'Tjänster'},
        parking: {status: false, FI: 'Pysäköinti', EN: 'Parking', SV: 'Parkering'},
        playgrounds: {status: false, FI: 'Leikkipaikat', EN: 'Playgrounds', SV: 'Lekplatser'}
    })

    const [ screenSize, setScreenSize ] = useState([]);

    const [ userCoord, setUserCoordState ] = useState([]);

    const setUserCoord = (coordArr) => {
        setUserCoordState(coordArr);
        if (mapSettings.centerUser) setMap({...mapSettings, coord: coordArr})
    }

    const toggleService = (service) => {
        let newData = {...showServices, [service]: {...showServices[service], status: !showServices[service].status}};
        setShowServices(newData);
    }

    const clearFilter = () => {
        let newState = {
            tags: { 
                land: {status: false, icon: '', FI: 'Kuivalla maalla', EN: 'Land sports', SV: null},
                water: {status: false, icon: '', FI: 'Vesiurheilu', EN: 'Water sports', SV: null},
                animals: {status: false, icon: '', FI: 'Eläinurheilu', EN: 'Animal sports', SV: null},
                ballgames: {status: false, icon: '', FI: 'Pallopelit', EN: 'Ball games', SV: null},
                nature: {status: false, icon: '', FI: 'Luonto', EN: 'Nature', SV: null},
                noEquipment: {status: false, icon: '', FI: 'Ei välineitä', EN: 'No equipment', SV: null},
                winter: {status: false, icon: '', FI: 'Talviurheilu', EN: 'Winter sports', SV: null},
            },
            cities: {
                helsinki: {status: false, icon: '', FI: 'Helsinki', EN: 'Helsinki', SV: 'Helsingfors'},
                espoo: {status: false, icon: '', FI: 'Espoo', EN: 'Espoo', SV: 'Esbo'},
                vantaa: {status: false, icon: '', FI: 'Vantaa', EN: 'Vantaa', SV: 'Vanda'},
            }
        }
        setFilter(newState)
    }

    const saveTag = (evt) => {
        const name = evt.target.name;
        const item = {
            ...filter.tags[name], 
            status: !filter.tags[name].status
        }
        setFilter({
            ...filter, 
            tags: {...filter.tags, 
                [name]: item}
            });
        resetMap();
    }

    const saveCity = (evt) => {
        const name = evt.target.name;
        const item = {
            ...filter.cities[name], 
            status: !filter.cities[name].status
        }
        setFilter({
            ...filter, 
            cities: {...filter.cities, 
                [name]: item}
            });
        resetMap();
    }

    const toggleLang = (lang) => {
        let newLanguages = language.map(l => {
            if (l.lang === lang) {
                l.langUsed = true;
                setCurrent(l.lang);
            } else { l.langUsed = false }
            return l
        });
        setLang(newLanguages)
    }

    const toggleModal = () => {
        console.log("toggle modal")
        setModal(!showModal);
    }

    const selectModalInformation = (object) => {
        setModalContent(object);
    }

    const centerMap = (coordArr) => {
        if (coordArr[0] && coordArr[1]) setMap({...mapSettings, coord: coordArr, zoom: 13});
    }

    const resetMap = () => {
        console.log(userCoord.length > 1 && mapSettings.centerUser)
        userCoord.length > 1 && mapSettings.centerUser ? 
        setMap({
            ...mapSettings,
            coord: userCoord,
            zoom: 12
        })
         : setMap({
            ...mapSettings,
            coord: [60.19, 24.94],
            zoom: 12
        })
    }

    const centerToUser = () => {
        if (userCoord.length > 1) setMap({...mapSettings, coord: userCoord})
    }

    return (
        <UIContext.Provider value={{language, currentLang, toggleLang,
                                    searchSuggestions, weatherDescriptions, toggleModal, showModal, selectModalInformation, modalContent,
                                    saveCity, saveTag, filter, clearFilter,
                                    mapSettings, centerMap, resetMap, centerToUser,
                                    showServices, toggleService,
                                    screenSize, setScreenSize,
                                    userCoord, setUserCoord}}>
            {props.children}
        </UIContext.Provider>
    );
}
