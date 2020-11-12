import React, { createContext,  useState } from 'react';

//languages, suggestion lists and icon reference here?
export const UIContext = createContext();
export const UIContextProvider = (props) => {
    const [ language, setLang ] = useState([
        {lang: 'EN',
        langUsed: true},
        {lang: 'FI',
        langUsed: false},
        {lang: 'SV',
        langUsed: false},
    ]);

    const [ currentLang, setCurrent ] = useState('EN');

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
                                    searchSuggestions}}>
            {props.children}
        </UIContext.Provider>
    );
}