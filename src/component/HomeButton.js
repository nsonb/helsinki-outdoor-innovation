import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UIContext } from '../Contexts/UIContext';


const HomeButton = () => {
    const { currentLang } = useContext(UIContext);
    const history = useHistory();
    return (
        <button className='hover' style ={style} onClick={() => history.push('/')}>
            {currentLang === 'SV' ? 'Home' : (currentLang === 'EN' ? 'Home' : 'Home')}
        </button>
    )
}

export default HomeButton;

const style = {
    display: 'block',
    zIndex: '20',
    fontSize: '0.8rem',
    color: 'white',
    backgroundColor: 'black',
    border: 'none',
    fontFamily: "'Montserrat', sans-serif",
    margin: 'auto'
}