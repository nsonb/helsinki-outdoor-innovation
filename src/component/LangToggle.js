import React, { useContext } from 'react';
import { UIContext } from '../Contexts/UIContext';
import { SportsContext } from '../Contexts/SportsContexts';

const LangToggle = () => {
    const { language, toggleLang,  } = useContext(UIContext);
    const { sports, allPossibleSuggestions } = useContext(SportsContext);

    const toggle = (lang) => {
        console.log(language);
        toggleLang(lang);
        allPossibleSuggestions(sports, lang);
    }

    return (
        <div style ={style}>
            {language.map(l => 
                <div key={l.lang} 
                    className = 'hover'
                    style={l.langUsed ? langButtonChosen : langButton} 
                    onClick={() => toggle(l.lang)}>{l.lang}
                </div>)}
        </div>
    )
}

export default LangToggle;

const style = {
    display: 'flex',
    fontSize: '0.5rem',
    textAlign: 'center',
    height: '100%',
    width: '100%',
    flexDirection: 'center'
}

const langButton = {
    display: 'block',
    marginLeft: '10%',
    color: '#fcfaf3',
    width: 'fit-content',
    borderRadius: '5px'
}

const langButtonChosen = {
    display: 'block',
    textDecoration: 'underline',
    marginLeft: '10%',
    color: '#fcfaf3',
    width: 'fit-content',
    borderRadius: '5px'
}