import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UIContext } from '../Contexts/UIContext';
import home from '../default-img/home.png';

const HomeButton = () => {
    const { currentLang } = useContext(UIContext);
    const history = useHistory();
    return (
        <button className='hover' style ={style} onClick={() => history.push('/')}>
            <img src={home} alt='Home button. Click to go back to home' style={{margin: 0, height: '2vh'}}/>
            {/*currentLang === 'SV' ? 'Till hem' : (currentLang === 'EN' ? 'Home' : 'Etusivulle')*/}
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