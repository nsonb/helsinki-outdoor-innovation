import React from 'react';
import './FutureWeather.css';

import tempCloud from '../default-img/cloud.png';
import rain from '../default-img/rain.jpg';


const FutureWeather = ({weather}) => {
    var img = tempCloud;
    switch(weather.weather) {
        case 'Clouds':
            img=tempCloud;
            break;
        case 'Rain':
            img=rain;
            break;
    }

    return (
    <div className='future-weather-item'>
        <img className='background-img' src={img} alt = ''/>
        <div className='info-container'>
            <div>{weather.time.slice(0,10)}</div>
            <div>{weather.temp}</div>
            <div>{weather.feelsLike}</div>
            <div>{weather.weatherDesc}</div>
        </div>
        
    </div>
    )
}

export default FutureWeather;