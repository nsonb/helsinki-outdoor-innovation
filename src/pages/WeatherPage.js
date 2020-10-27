import React from 'react';
import CurrentWeather from '../component/CurrentWeather';
import FutureWeatherHolder from '../component/FutureWeatherHolder';
import './WeatherPage.css';


const WeatherPage = () => {
    return (
    <div>
        <CurrentWeather />
        <FutureWeatherHolder />
    </div>
    )
}

export default WeatherPage;