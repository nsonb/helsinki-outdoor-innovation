import React, {useContext} from 'react';
import { WeatherContext } from '../Contexts/WeatherContext';
import './CurrentWeather.css';

//img
import scatteredCloud from '../default-img/scatterCloudCarl_Bergman.jpg';
import rain from '../default-img/rainJussi_Hellsten.jpg';
import sun from '../default-img/sunJussi_Hellsten.jpg';
import thunderStorm from '../default-img/thunder_storm_Timo Newton-Syms.jpg';
import fewCloud from '../default-img/fewCloud_Natura_Viva.jpg';
import heavyRain from '../default-img/heavy_rain_Chris_Bailey.jpg';
import brokenCloud from '../default-img/broken-white-cloud.jpg';
import snow from '../default-img/snow_EmiliaHoisko.jpg';
import mist from '../default-img/fog_Carl_Bergman.jpg';

// icon
import icon01d from '../weather-icon/01d.png';
import icon01n from '../weather-icon/01n.png';
import icon02d from '../weather-icon/02d.png';
import icon02n from '../weather-icon/02n.png';
import icon03d from '../weather-icon/03d.png';
import icon03n from '../weather-icon/03n.png';
import icon04d from '../weather-icon/04d.png';
import icon04n from '../weather-icon/04n.png';
import icon09d from '../weather-icon/09d.png';
import icon09n from '../weather-icon/09d.png';
import icon10d from '../weather-icon/10d.png';
import icon10n from '../weather-icon/10n.png';
import icon11d from '../weather-icon/11d.png';
import icon11n from '../weather-icon/11n.png';
import icon13d from '../weather-icon/13d.png';
import icon13n from '../weather-icon/13n.png';


const CurrentWeather = () => {
    const {currWeather, weather} = useContext(WeatherContext);
    var img = thunderStorm;
    var weatherBrightStyle = false;
    var icon = icon01d;
    switch(currWeather.iconNum) {
        case '01d':
            img=sun;
            icon = icon01d;
            weatherBrightStyle = true;
            break;
        case '01n':
            img=sun;
            icon = icon01n;
            weatherBrightStyle = true;
            break;
        case '02d':
            img=fewCloud;
            icon = icon02d;
            weatherBrightStyle = false;
            break;
        case '02n':
            img=fewCloud;
            icon = icon02n;
            weatherBrightStyle = false;
            break;
        case '03d':
            img=scatteredCloud;
            icon = icon03d;
            weatherBrightStyle = true;
            break;
        case '03n':
            img=scatteredCloud;
            icon = icon03n;
            weatherBrightStyle = true;
            break;
        case '04d':
            img=brokenCloud;
            icon = icon04d;
            weatherBrightStyle = true;
            break;
        case '04n':
            img=brokenCloud;
            icon = icon04n;
            weatherBrightStyle = true;
            break;
        case '09d':
            icon = icon09d;
            img=heavyRain;
            weatherBrightStyle = false;
            break;
        case '09n':
            img=heavyRain;
            icon = icon09n;
            weatherBrightStyle = false;
            break;
        case '10d':
            img=rain;
            icon = icon10d;
            weatherBrightStyle = false;
            break;
        case '10n':
            img=rain;
            icon = icon10n;
            weatherBrightStyle = false;
            break;
        case '11d':
            icon = icon11d;
            img=thunderStorm;
            weatherBrightStyle = false;
            break;
        case '11n':
            icon = icon11n;
            img=thunderStorm;
            weatherBrightStyle = false;
            break;
        case '13d':
            img=snow;
            icon = icon13d;
            weatherBrightStyle = true;
            break;
        case '13n':
            img=snow;
            icon = icon13n;
            weatherBrightStyle = true;
            break;
        case '14d':
            img=mist;
            weatherBrightStyle = true;
            break;
        case '14n':
            img=mist;
            weatherBrightStyle = true;
            break;
        default:
            icon = icon01d;
            img=brokenCloud;
            break;
    }

    console.log(img);
    return (
    <div className='current-weather-container' style={weatherBrightStyle ? {color: 'black'} : {color: 'white'}}>
        <img className='background-img' src={img} alt = ''/>
        <div className='info'>
            <div className='locale'>{weather.city.name}</div>
            <div className='weather-desc'>{currWeather.weatherDesc}</div>
            <div className='temp'>
                {currWeather.temp}
            </div>
            <div className='weather-desc'>feels like {currWeather.feelsLike}</div>
                <div className='detail-box'>
                    <div className='detail-item'>{currWeather.humidity}</div>
                    <div className='detail-item'>{currWeather.weather}</div>
                    <div className='detail-item'>{currWeather.wind}</div>
                </div>
            </div>
       
        
    </div>
    )
}

export default CurrentWeather;