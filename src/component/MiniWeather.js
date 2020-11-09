import React, { useContext } from 'react';
import './miniweather.css';
import { WeatherContext } from '../Contexts/WeatherContext';
import { useHistory } from 'react-router-dom';

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
import temp from '../weather-icon/temp.png';
import wind from '../weather-icon/wind02.png';

const MiniWeather = ({location}) => {
    const history = useHistory();
    const {currWeather} = useContext(WeatherContext);

    const gotoWeather = () => {
        history.push('/weather');
    }

    return (
        <div className='weather-container main-background-color' style={location === 'top' ? {top:'0'} : {bottom:'0'}}>
            <div className = 'weather-element main-background-color-faded' onClick={() => history.push('/weather')}> <img src={weatherIcon}/> {currWeather.weatherDesc} </div>
            <div className = 'weather-element main-background-color-faded' onClick={() => history.push('/weather')}> <img src={temp}/> {currWeather.temp}</div>
            <div className = 'weather-element main-background-color-faded' onClick={() => history.push('/weather')}> feels like {currWeather.feelsLike}</div>
            <div className = 'weather-element main-background-color-faded' onClick={() => history.push('/weather')}> <img src={wind}/> {currWeather.wind}</div>
            <div className = 'weather-element main-background-color-faded' onClick={() => history.push('/weather')}>humidity: {currWeather.humidity}</div>
            <div className = 'credit' style={location === 'top' ? {bottom:'-20px'} : {top: '-20px'}}> weather powered by <a href='https://openweathermap.org/'>Open Weather</a></div>
        </div>
    )
}

export default MiniWeather;

