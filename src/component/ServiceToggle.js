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
                <div key={k} onClick={() => toggleService(k)}>
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
    width: '2vh',
    height: '2vh',
    borderRadius: '1vh',
    backgroundColor: 'white'
}

const toggleSwitch = {
    display: 'flex',
    width: '30%',
    height: '2vh',
    borderRadius: '1vh',
    backgroundColor: 'grey',
    margin: 'auto'
}

const style = {
    display: 'flex',
    fontSize: '1vw',
    textAlign: 'center',
    width: '10%',
    flexDirection: 'column',
    position: 'absolute',
    top: '4vh',
    right: '0',
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