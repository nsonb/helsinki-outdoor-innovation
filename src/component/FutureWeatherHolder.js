import React, {useContext} from 'react';
import FutureWeather from './FutureWeather';
import { WeatherContext } from '../Contexts/WeatherContext';

// images
import cloudImg from '../default-img/cloudy-weather-13.jpg';
import sunImg from '../default-img/sun.jpg';
import thunderImg from '../default-img/thunderstorm.jpeg';
import rainImg from '../default-img/rain.jpg';
import snowImg from '../default-img/snow.jpg'

const FutureWeatherHolder = () => {
    const {sixHours} = useContext(WeatherContext);
    const renderedFuture = sixHours.map((hour, index) => {
        if(hour.time.includes('12:00:00') ) {
            return <FutureWeather weather={hour} key={'futureweather' + index}/>
        }
    })

    const renderedTodayFuture = sixHours.map((hour, index) => {
        if(hour.time.slice(0,10) === sixHours[0].time.slice(0,10) ) {
            return <FutureWeather weather={hour} key={'futureTodayWeather' + index}/>
        }
    })
    return (
    <div style={container}>
        <div className='secondary-background-color-faded' style={weatherBox}>
            <p style={weatherSegment} className='main-background-color'>Today's Weather</p>
            <div style={weatherContainer} className='secondary-background-color'>
                {renderedTodayFuture}
            </div>
            
        </div>
        <div className='secondary-background-color-faded' style={weatherBox}>
            <p style={weatherSegment} className='main-background-color'>Week Weather</p>
            <div style={weatherContainer} className='secondary-background-color'>
                {renderedFuture}
            </div>
            
        </div>
        
    </div>
    )
}

export default FutureWeatherHolder;

const container = {
    width: '60%',
    minWidth: '280px',
    margin: 'auto',
    height: 'fit-content',
    marginTop: '20px',
    left: 0,
    right: 0,
    bottom: '12px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    padding: '5px'
}

const weatherBox = {
    display: 'flex',
    height: '80px',
    width: '100%',
    margin: '12px',

    alignItems: 'flex-start',
    position: 'relative',
}

const weatherContainer = {
    display: 'flex',
    height: '80px',
    width: '100%',
    margin: '5px',
    borderRadius: '0px',
    alignItems: 'flex-start',
    position: 'relative',
    overflow: 'scroll'
}

const weatherSegment = {
    display: 'block',
    position: 'absolute',
    top: '-20px',
    left: '0',
    margin: '0'
}