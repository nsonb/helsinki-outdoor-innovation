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

    const [ weatherDescriptions ] = useState({
        '01d': {FI: 'Selkeää', EN: 'Clear sky', SV: 'Klar himmel'},
        '02d': {FI: 'Puolipilvistä', EN: 'Few clouds', SV: 'Få moln'},
        '03d': {FI: 'Hajanaisia pilviä', EN: 'Scattered clouds', SV: 'Spridda moln'},
        '04d': {FI: 'Rakoileva pilvipeite', EN: 'Broken clouds', SV: 'Trasiga moln'},
        '09d': {FI: 'Kevyttä sadetta', EN: 'Shower rain', SV: 'Duschregn'},
        '10d': {FI: 'Sadetta', EN: 'Rain', SV: 'Regn'},
        '11d': {FI: 'Ukkosta', EN: 'Thunderstorm', SV: 'Åskvader'},
        '13d': {FI: 'Lumisade', EN: 'Snow', SV: 'Snö'},
        '50d': {FI: 'Sumua', EN: 'Mist', SV: 'Dimma'},
        '01n': {FI: 'Selkeää', EN: 'Clear sky', SV: 'Klar himmel'},
        '02n': {FI: 'Puolipilvistä', EN: 'Few clouds', SV: 'Få moln'},
        '03n': {FI: 'Hajanaisia pilviä', EN: 'Scattered clouds', SV: 'Spridda moln'},
        '04n': {FI: 'Rakoileva pilvipeite', EN: 'Broken clouds', SV: 'Trasiga moln'},
        '09n': {FI: 'Kevyttä sadetta', EN: 'Shower rain', SV: 'Duschregn'},
        '10n': {FI: 'Sadetta', EN: 'Rain', SV: 'Regn'},
        '11n': {FI: 'Ukkosta', EN: 'Thunderstorm', SV: 'Åskvader'},
        '13n': {FI: 'Lumisade', EN: 'Snow', SV: 'Snö'},
        '50n': {FI: 'Sumua', EN: 'Mist', SV: 'Dimma'}
    })

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

    return (
        <UIContext.Provider value={{language, currentLang, toggleLang, 
                                    searchSuggestions, weatherDescriptions}}>
            {props.children}
        </UIContext.Provider>
    );
}