import React, { useContext, useEffect } from 'react';
import { UIContext } from '../Contexts/UIContext';

const ServiceToggle = () => {
    const { showServices, toggleService, currentLang } = useContext(UIContext);

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
        </div>
    )
}

export default ServiceToggle;

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

const style = {
    display: 'flex',
    fontSize: '0.7rem',
    textAlign: 'left',
    width: '10%',
    minWidth: '120px',
    flexDirection: 'column',
    position: 'absolute',
    top: '30%',
    left: '0',
    zIndex: '20',
    padding: '3px',
    borderRadius: '5px'
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