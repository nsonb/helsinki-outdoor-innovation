import React, {useEffect, useContext} from 'react';
import CurrentWeather from '../component/CurrentWeather';
import FutureWeatherHolder from '../component/FutureWeatherHolder';
import MiniWeather from '../component/MiniWeather';
import './WeatherPage.css';

import { SportsContext } from '../Contexts/SportsContexts';
import { WeatherContext } from '../Contexts/WeatherContext';
import { ServiceContext } from '../Contexts/ServiceContext';


const WeatherPage = () => {

    const { updateSports } = useContext(SportsContext);
    const { updateWeather } = useContext(WeatherContext);
    const { updateServices } = useContext(ServiceContext);

    useEffect(() => {
        updateSports();
        updateServices();
        updateWeather();
    }, []);

    return (
    <div style={{height: '100%', width: '100%', overflow: 'hidden', position: 'absolute'}}>
        <MiniWeather location='top'/>
        <CurrentWeather />
        <FutureWeatherHolder />
    </div>
    )
}

export default WeatherPage;