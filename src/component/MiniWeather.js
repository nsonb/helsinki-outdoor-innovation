import React, { useContext } from 'react';
import './miniweather.css';
import { WeatherContext } from '../Contexts/WeatherContext';
import { useHistory } from 'react-router-dom';

const MiniWeather = () => {
    const history = useHistory();
    const {currWeather} = useContext(WeatherContext);


    return (
        <div className='weather-container main-background-color-faded' onClick={() => history.push('/weather')}>
            <div className = 'weather-element'>temp {currWeather.temp}</div>
            <div className = 'weather-element'>feels like {currWeather.feelsLike}</div>
            <div className = 'weather-element'>wind: {currWeather.wind}</div>
            <div className = 'weather-element'>humidity: {currWeather.humidity}</div>
            <div className = 'weather-element'> {currWeather.weatherDesc} </div>
        </div>
    )
}

export default MiniWeather;

