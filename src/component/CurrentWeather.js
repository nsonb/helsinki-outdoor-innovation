import React, {useContext} from 'react';
import { WeatherContext } from '../Contexts/WeatherContext';
import './CurrentWeather.css';
import cloudImg from '../default-img/cloudy-weather-13.jpg';


const CurrentWeather = () => {
    const {currWeather} = useContext(WeatherContext);
    console.log(currWeather);
    return (
    <div className='current-weather-container'>
        <img className='background-img' src={cloudImg} alt = ''/>
        <div className='info'>
    <div className='temp'>{currWeather.temp}<br/>{currWeather.weatherDesc}</div>
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