import React from 'react';
import CurrentWeather from '../component/CurrentWeather';
import FutureWeatherHolder from '../component/FutureWeatherHolder';
import BackButton from '../component/BackButton';
import './WeatherPage.css';


const WeatherPage = () => {
    return (
    <div>
        <BackButton />
        <CurrentWeather />
        <FutureWeatherHolder />
    </div>
    )
}

export default WeatherPage;