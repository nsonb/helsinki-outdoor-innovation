import React, { useContext, useEffect } from 'react';
import { UIContext } from '../Contexts/UIContext';
import { SportsContext } from '../Contexts/SportsContexts';

const LangToggle = () => {
    const { language, toggleLang, currentLang } = useContext(UIContext);
    const { sports, allPossibleSuggestions } = useContext(SportsContext);

    const toggle = (lang) => {
        console.log(language);
        toggleLang(lang)
        allPossibleSuggestions(sports, lang);
    }

    useEffect(() => {
        toggle(currentLang)
    }, [])

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