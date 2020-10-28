import React, { useContext } from 'react';
import './miniweather.css'
import { WeatherContext } from '../Contexts/WeatherContext';

const MiniWeather = () => {
    const { currWeather } = useContext(WeatherContext);

    return (
        <div className='weather-container'>
            <div className = 'weather-element'>temperature: {currWeather.temp}</div>
            <div className = 'weather-element'>wind: {currWeather.wind}</div>
            <div className = 'weather-element'>humidity: {currWeather.humidity}</div>
            <div className = 'weather-element'>weather: {currWeather.clouds}</div>
        </div>
    )
}

export default MiniWeather;