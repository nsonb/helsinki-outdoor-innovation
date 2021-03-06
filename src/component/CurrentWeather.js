import React, {useContext, useState} from 'react';
import { WeatherContext } from '../Contexts/WeatherContext';
import { UIContext } from '../Contexts/UIContext';
import './CurrentWeather.css';

//img -need to be replaced for copyright
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
/*import icon01d from '../weather-icon/01d.png';
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
import icon13n from '../weather-icon/13n.png';*/


const CurrentWeather = () => {
    const { currWeather, weather } = useContext(WeatherContext);
    const { currentLang, weatherDescriptions, screenSize } = useContext(UIContext);
    const [ textContent ] = useState({
        temp: {FI: 'Lämpötila', EN: 'Temperature', SV: 'Temperatur'},
        wind: {FI: 'Tuuli', EN: 'Wind', SV: 'Vind'},
        humidity: {FI: 'Ilmankosteus', EN: 'Humidity', SV: 'Fuktighet'},
        weather: {FI: 'Sää', EN: 'Weather', SV: 'Väder'},
        feelsLike: {FI: 'Tuntuu kuin', EN: 'Feels like', SV: 'Känns som'},
        cloudiness: {FI: 'Pilvisyys', EN: 'Cloudiness', SV: 'Grumlighet'},
    })
    var img = thunderStorm;
    var weatherBrightStyle = false;
    //var icon = icon01d;
    
    switch(currWeather.iconNum) {
        case '01d':
            img=sun;
            //icon = icon01d;
            weatherBrightStyle = true;
            break;
        case '01n':
            img=sun;
            //icon = icon01n;
            weatherBrightStyle = true;
            break;
        case '02d':
            img=fewCloud;
            //icon = icon02d;
            weatherBrightStyle = false;
            break;
        case '02n':
            img=fewCloud;
            //icon = icon02n;
            weatherBrightStyle = false;
            break;
        case '03d':
            img=scatteredCloud;
            //icon = icon03d;
            weatherBrightStyle = true;
            break;
        case '03n':
            img=scatteredCloud;
            //icon = icon03n;
            weatherBrightStyle = true;
            break;
        case '04d':
            img=brokenCloud;
            //icon = icon04d;
            weatherBrightStyle = true;
            break;
        case '04n':
            img=brokenCloud;
            //icon = icon04n;
            weatherBrightStyle = true;
            break;
        case '09d':
            //icon = icon09d;
            img=heavyRain;
            weatherBrightStyle = false;
            break;
        case '09n':
            img=heavyRain;
            //icon = icon09n;
            weatherBrightStyle = false;
            break;
        case '10d':
            img=rain;
            //icon = icon10d;
            weatherBrightStyle = false;
            break;
        case '10n':
            img=rain;
            //icon = icon10n;
            weatherBrightStyle = false;
            break;
        case '11d':
            //icon = icon11d;
            img=thunderStorm;
            weatherBrightStyle = false;
            break;
        case '11n':
            //icon = icon11n;
            img=thunderStorm;
            weatherBrightStyle = false;
            break;
        case '13d':
            img=snow;
            //icon = icon13d;
            weatherBrightStyle = true;
            break;
        case '13n':
            img=snow;
            //icon = icon13n;
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
            //icon = icon01d;
            img=brokenCloud;
            break;
    }

    //console.log(img);
    return (
    <div className='current-weather-container' style={weatherBrightStyle ? {color: 'black'} : {color: 'white'}}>
        <img className='background-img' src={img} alt = 'descriptive weather image'/>
        <div className='info main-background-color-shade' style={screenSize[1] > 450 ? info : {...info, fontSize: "1rem"}}>
            <div className='locale'>{weather.city.name}</div>
            <div className='weather-desc'>{weatherDescriptions[currWeather.iconNum] && weatherDescriptions[currWeather.iconNum][currentLang]}</div>
            <div className='temp' style={screenSize[1] > 470 ? temp : (screenSize[1] < 410 ? {...temp, fontSize:"1.5rem"} :{...temp, fontSize: '2rem'})}>
                {currWeather.temp}
            </div>
            <div className='detail-box'>
                <div className='detail-item'>
                    <p>{textContent.feelsLike[currentLang]}: {currWeather.feelsLike}</p> 
                </div>
                <div className='detail-item'>
                    <p>{textContent.humidity[currentLang]}: {currWeather.humidity}</p> 
                </div>
                <div className='detail-item'>
                    <p>{textContent.wind[currentLang]}: {currWeather.wind}</p> 
                </div>
            </div>
        </div>
       
        
    </div>
    )
}

export default CurrentWeather;

const temp = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3rem",
    fontWeight: "bolder",
    padding: "auto",
    textAlign: "center",
    verticalAlign: "middle"
}

const info = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    top:"8vh",
    left: 0,
    right: 0,
    width: "60%",
    minWidth: "280px",
    height: "45vh",
    alignContent: "center",
    justifyContent: "space-around",
    margin:"auto",
    borderRadius: "8px"
}