import React, { useContext } from 'react';
import { UIContext } from '../Contexts/UIContext';
import { SportsContext } from '../Contexts/SportsContexts';

const LangToggle = () => {
    const { language, toggleLang,  } = useContext(UIContext);
    const { status, sports, allPossibleSuggestions } = useContext(SportsContext);

    const toggle = (lang) => {
        console.log(language);
        toggleLang(lang)
        allPossibleSuggestions(sports, lang);
    }

    return (
        <div className = 'button main-background-color-faded' style ={style}>
            {language.map(l => 
                <div key={l.lang}
                    style={l.langUsed ? {textDecoration: 'underline'} : {}} 
                    onClick={() => toggle(l.lang)}>{l.lang}
                </div>)}
        </div>
    )
}

export default LangToggle;

const style = {
    display: 'block',
    position: 'absolute',
    top: '2%',
    left: '2%',
    zIndex: '20',
    padding: '10px'
}