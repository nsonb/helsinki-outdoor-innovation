import React from 'react';
import FutureWeather from './FutureWeather';
import './FutureWeatherHolder.css';

import cloudImg from '../default-img/cloudy-weather-13.jpg';
import sunImg from '../default-img/sun.jpg';
import thunderImg from '../default-img/thunderstorm.jpeg';
import rainImg from '../default-img/rain.jpg';
import snowImg from '../default-img/snow.jpg'

const FutureWeatherHolder = () => {
    return (
    <div className='future-weather-holder-container'>
        <FutureWeather img={sunImg}></FutureWeather>
        <FutureWeather img={cloudImg}></FutureWeather>
        <FutureWeather img={thunderImg}></FutureWeather>
        <FutureWeather img={rainImg}></FutureWeather>
        <FutureWeather img={snowImg}></FutureWeather>
        <FutureWeather img={cloudImg}></FutureWeather>
    </div>
    )
}

export default FutureWeatherHolder;