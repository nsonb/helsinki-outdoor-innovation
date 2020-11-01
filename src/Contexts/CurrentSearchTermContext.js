import React, { createContext,  useState } from 'react';

export const CurrentTermContext = createContext();
export const CurrentTermContextProvider = (props) => {
    const [ currentTerm, setCurrentTerm ] = useState('');

    const updateTerm = (term) => {
        setCurrentTerm(term);
    }

    return (
        <CurrentTermContext.Provider value={{currentTerm, updateTerm}}>
            {props.children}
        </CurrentTermContext.Provider>
    );
}