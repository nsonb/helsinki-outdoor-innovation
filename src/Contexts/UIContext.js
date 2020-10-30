import React, { createContext,  useState } from 'react';

//languages, suggestion lists and icon reference here?
export const UIContext = createContext();
export const UIContextProvider = (props) => {
    const [ language, setLang ] = useState({
        useLanguage: 'EN'
    });
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
        category: "Categories"}
    ])

    const toggleLang = (language) => {
        setLang({useLanguage: language})
    }


    return (
        <UIContext.Provider value={{language, toggleLang, searchSuggestions}}>
            {props.children}
        </UIContext.Provider>
    );
}