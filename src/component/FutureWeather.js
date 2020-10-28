import React from 'react';
import { WeatherContext } from '../Contexts/WeatherContext';
import './FutureWeather.css';


const FutureWeather = (props) => {
    return (
    <div className='future-weather-item'>
        <img className='background-img' src={props.img} alt = ''/>
        <div className='info-container'>
            <div>Time</div>
            <div>Temperature</div>
            <div>Feels Like</div>
            <div>Weather Condition</div>
        </div>
        
    </div>
    )
}

export default FutureWeather;