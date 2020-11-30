import React, { useContext, useEffect, useState } from 'react';
import { UIContext } from '../Contexts/UIContext';

const ServiceToggle = () => {
    const { showServices, toggleService, currentLang } = useContext(UIContext);
    const [ hide, setHide] = useState(false);
    const style = {
        fontSize: '0.7rem',
        textAlign: 'left',
        width: '10%',
        minWidth: '120px',
        flexDirection: 'column',
        position: 'absolute',
        top: '30%',
        left: hide? '0': '-125px',
        zIndex: '20',
        padding: '3px',
        borderRadius: '5px'
    }

    useEffect(() => {
        Object.keys(showServices).map(k => console.log(k))
    }, [])

    return (
        <div style={style}  className='secondary-background-color'>
            {Object.keys(showServices).map(k => 
                <div key={k} onClick={() => toggleService(k)} style={toggleBox}>
                    <p>{showServices[k][currentLang]}</p>
                    <div className='button toggleSwitch' 
                        style={showServices[k].status ? {...toggleSwitch, flexDirection: 'row-reverse'} : toggleSwitch}>
                        <div className='toggleButton' 
                            style={showServices[k].status ? {...toggleButton, backgroundColor: 'green'} : toggleButton}></div>
                    </div>
                </div>)}
            <button style={toggleClick} className='hover main-background-color-faded' onClick={() => {setHide(!hide)}}>{hide? '>': '<'}</button>
        </div>
    )
}

export default ServiceToggle;

const toggleClick = {
    position: 'absolute',
    right: '-18px',
    top: '0',
    height: '100%',
    width:'18px',
    padding: '2px',
    paddingRight: '4px',
    fontFamily: "'Montserrat', sans-serif",
    border: 'none',
    borderRadius: '5px'
}

const toggleButton = {
    width: '1vh',
    borderRadius: '1vh',
    backgroundColor: 'white'
}

const toggleSwitch = {
    display: 'flex',
    width: '3vh',
    height: '2vh',
    borderRadius: '1vh',
    backgroundColor: 'grey',
    margin: 'auto',
    marginRight: '5px'
}

const toggleBox = {
    display: 'flex',
    flexDirection: 'row',
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