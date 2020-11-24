import React, { useContext, useEffect } from 'react';
import { UIContext } from '../Contexts/UIContext';
import { SportsContext } from '../Contexts/SportsContexts';

const LangToggle = () => {
    const { language, toggleLang, currentLang } = useContext(UIContext);
    const { sports, allPossibleSuggestions } = useContext(SportsContext);

    const toggle = (lang) => {
        toggleLang(lang);
        allPossibleSuggestions(sports, lang);
    }

    useEffect(() => {
        toggle(currentLang)
    }, [])

    return (
        <div style ={style}>
            {language.map(l => 
                <button key={l.lang} 
                    className = 'hover main-background-color-faded'
                    style={l.langUsed ? langButtonChosen : langButton}
                    onClick={() => toggle(l.lang)}>{l.lang}
                </button>)}
        </div>
    )
}

export default LangToggle;

const style = {
    display: 'flex',
    fontSize: '0.6rem',
    textAlign: 'right',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    
}

const langButton = {
    display: 'block',
    margin: 'auto',
    marginRight: '3%',
    color: '#fcfaf3',
    width: 'fit-content',
    borderRadius: '5px',
    border: 'none',
    fontFamily: "'Montserrat', sans-serif",
    padding: '0'
}

const langButtonChosen = {
    display: 'block',
    textDecoration: 'underline',
    margin: 'auto',
    marginRight: '3%',
    color: '#fcfaf3',
    width: 'fit-content',
    borderRadius: '5px',
    border: 'none',
    fontFamily: "'Montserrat', sans-serif",
    padding: '0'
}