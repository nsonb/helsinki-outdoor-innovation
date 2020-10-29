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
    var d = new Date(weather.time.slice(0,10));
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return (
    <div className='future-weather-item'>
        <img className='background-img' src={img} alt = ''/>
        <div className='info-container'>
            <div>{weekday[d.getDay()]}</div>
            <div>{weather.temp}</div>
            <div>{weather.feelsLike}</div>
            <div>{weather.weatherDesc}</div>
        </div>
        
    </div>
    )
}

export default FutureWeather;