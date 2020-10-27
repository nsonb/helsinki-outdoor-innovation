import React, { useContext } from 'react';
import './Miniweather.css';
import { WeatherContext } from '../Contexts/WeatherContext';
import { useHistory } from 'react-router-dom';

const MiniWeather = () => {
    const history = useHistory();
    const {currWeather} = useContext(WeatherContext);

    const gotoWeather = () => {
        history.push('/weather');
    }

    return (
        <div className='weather-container' onClick={gotoWeather}>
            <div className = 'weather-element'>temperature: {currWeather.temp}</div>
            <div className = 'weather-element'>wind: {currWeather.wind}</div>
            <div className = 'weather-element'>humidity: {currWeather.humidity}</div>
            <div className = 'weather-element'>weather: {currWeather.weather}</div>
        </div>
    )
}

export default MiniWeather;

