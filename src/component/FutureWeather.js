import React from 'react';
import './FutureWeather.css';

import scatteredCloud from '../default-img/scatterCloudCarl_Bergman.jpg';
import rain from '../default-img/rainJussi_Hellsten.jpg';
import sun from '../default-img/sunJussi_Hellsten.jpg';
import thunderStorm from '../default-img/thunder_storm_Timo Newton-Syms.jpg';
import fewCloud from '../default-img/fewCloud_Natura_Viva.jpg';
import heavyRain from '../default-img/heavy_rain_Chris_Bailey.jpg';
import brokenCloud from '../default-img/broken-white-cloud.jpg';
import snow from '../default-img/snow_EmiliaHoisko.jpg';
import mist from '../default-img/fog_Carl_Bergman.jpg';


const FutureWeather = ({weather}) => {
    var img = thunderStorm;
    switch(weather.iconNum) {
        case '01d':
            img=sun;
            break;
        case '01n':
            img=sun;
            break;
        case '02d':
            img=fewCloud;
            break;
        case '02n':
            img=fewCloud;
            break;
        case '03d':
            img=scatteredCloud;
            break;
        case '03n':
            img=scatteredCloud;
            break;
        case '04d':
            img=brokenCloud;
            break;
        case '04n':
            img=brokenCloud;
        case '09d':
            img=heavyRain;
            break;
        case '09n':
            img=heavyRain;
            break;
        case '10d':
            img=rain;
            break;
        case '10n':
            img=rain;
            break;
        case '11d':
            img=thunderStorm;
            break;
        case '11n':
            img=thunderStorm;
            break;
        case '13d':
            img=snow;
            break;
        case '13n':
            img=snow;
            break;
        case '14d':
            img=mist;
            break;
        case '14n':
            img=mist;
            break;
        default:
            img=brokenCloud;
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