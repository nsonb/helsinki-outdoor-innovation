import React, {useContext} from 'react';
import FutureWeather from './FutureWeather';
import './FutureWeatherHolder.css';
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
    return (
    <div className='future-weather-holder-container'>
        {renderedFuture}
    </div>
    )
}

export default FutureWeatherHolder;