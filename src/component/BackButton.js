import React, { useContext, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { UIContext } from '../Contexts/UIContext';


const BackButton = () => {
    const { currentLang } = useContext(UIContext);
    const history = useHistory();
    return (
        <div className = 'button main-background-color-faded' style ={style} onClick={() => history.goBack()}>
            {currentLang === 'SV' ? 'Tillbaka' : (currentLang === 'EN' ? 'Back' : 'Takaisin')}
        </div>
    )
}

export default BackButton;

const style = {
    display: 'block',
    position: 'absolute',
    top: '2%',
    left: '2%',
    zIndex: '20',
    padding: '10px'
}