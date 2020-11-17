import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UIContext } from '../Contexts/UIContext';


const HomeButton = () => {
    const { currentLang } = useContext(UIContext);
    const history = useHistory();
    return (
        <div className = 'button main-background-color-faded' style ={style} onClick={() => history.push('/')}>
            {currentLang === 'SV' ? 'Tillbaka' : (currentLang === 'EN' ? 'Back' : 'Takaisin')}
        </div>
    )
}

export default HomeButton;

const style = {
    display: 'block',
    position: 'absolute',
    top: '4vh',
    left: '2%',
    zIndex: '20',
    padding: '5px',
    fontSize: '0.5rem'
}