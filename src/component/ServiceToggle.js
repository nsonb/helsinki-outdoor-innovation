import React, { useContext, useEffect } from 'react';
import { UIContext } from '../Contexts/UIContext';

const ServiceToggle = () => {
    const { showServices, toggleService, currentLang } = useContext(UIContext);

    useEffect(() => {
        Object.keys(showServices).map(k => console.log(k))
    }, [])

    return (
        <div style={style}>
            {Object.keys(showServices).map(k => 
                <div key={k} onClick={() => toggleService(k)} style={toggleBox}>
                    {showServices[k][currentLang]}
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
    margin: 'auto'
}

const toggleBox = {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '8px'
}

const style = {
    display: 'flex',
    fontSize: '0.5rem',
    textAlign: 'center',
    width: '30%',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '0',
    zIndex: '20',
    padding: '5px'
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