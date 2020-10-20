import React from 'react';
import './Miniweather.css';

const MiniWeather = () => {
    return (
        <div className='weather-container'>
            <div className = 'weather-element'>temperature</div>
            <div className = 'weather-element'>wind</div>
            <div className = 'weather-element'>humidity</div>
            <div className = 'weather-element'>rain chance</div>

        </div>
    )
}

export default MiniWeather;