import React, { useContext, useEffect } from 'react';
import './miniweather.css';
import { useHistory } from 'react-router-dom';
import LangToggle from './LangToggle';
import HomeButton from './HomeButton';

// images
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
//icon
import temp from '../weather-icon/temp.png';
import wind from '../weather-icon/wind03.png';
import humid from '../weather-icon/humid02.png';

//to get weather info
import { SportsContext } from '../Contexts/SportsContexts';
import { WeatherContext } from '../Contexts/WeatherContext';
import { ServiceContext } from '../Contexts/ServiceContext';
import { UIContext } from '../Contexts/UIContext';

const MiniWeather = ({location}) => {
    const history = useHistory();
    const {currWeather} = useContext(WeatherContext);
    const { updateSports } = useContext(SportsContext);
    const { updateWeather } = useContext(WeatherContext);
    const { updateServices } = useContext(ServiceContext);
    const { screenSize } = useContext(UIContext);

    useEffect(() => {
        updateSports();
        updateServices();
        updateWeather();
    }, []);

    // set the weather icon
    /*var weatherIcon = icon01d;
    switch (currWeather.iconNum) {
        case '01d':
            weatherIcon = icon01d;
            break;
        case '01n':
            weatherIcon = icon01n;
            break;
        case '02d':
            weatherIcon = icon02d;
            break;
        case '02n':
            weatherIcon = icon02n;
            break;
        case '03d':
            weatherIcon = icon03d;
            break;
        case '03n':
            weatherIcon = icon03n;
            break;
        case '04d':
            weatherIcon = icon04d;
            break;
        case '04n':
            weatherIcon = icon04n;
            break;
        case '09d':
            weatherIcon = icon09d;
            break;
        case '09d':
            weatherIcon = icon09n;
            break;
        case '10d':
            weatherIcon = icon10d;
            break;
        case '10n':
            weatherIcon = icon10n;
            break;
        case '11d':
            weatherIcon = icon11d;
            break;
        case '11n':
            weatherIcon = icon11n;
            break;
        case '13d':
            weatherIcon = icon13d;
            break;
        case '13n':
            weatherIcon = icon13n;
            break;
        default:
            weatherIcon = icon13d;
            break;
    }*/
    //location === 'top' ? {top:'0'} : {bottom:'0'}
    return (
        <div className='main-background-color' style={screenSize[0] > 425 ? container : {...container, fontSize: "70%"}} tabIndex='0'>
            <div className = 'weather-element main-background-color-faded'> <HomeButton/></div>
            <div className = 'weather-element main-background-color-faded' onClick={() => history.push('/weather')}> <img src={temp} alt='icon'/> <p>{currWeather.temp}</p> </div>
            
            <div className = 'weather-element main-background-color-faded' onClick={() => history.push('/weather')}> <img src={wind} alt='icon'/> <p>{currWeather.wind}</p></div>
            <div className = 'weather-element main-background-color-faded' onClick={() => history.push('/weather')}><img src={humid} alt='icon'/> <p>{currWeather.humidity}</p></div>
            <div className = 'weather-element'><LangToggle/></div>
            <div className = 'credit' style={credit}> weather powered by <a href='https://openweathermap.org/' style={creditlink}>Open Weather</a></div>
        </div>
    )
}

export default MiniWeather;


const container = {
    position: "absolute",
    top: 0,
    display: "flex",
    flexDirection: "row",
    left: 0,
    right: 0,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    zIndex: 2,
    fontSize: "75%"
}

const credit = {
    bottom:'-20px',
    fontSize: "75%",
    margin: "5px",
    position: "absolute",
    width: "fit-content",
    right: 0,
    color: "#FFF9E3"
}
const creditlink = {
    display: "inline-block",
    padding: "1px",
    borderRadius: "2px",
    color: "white",
}