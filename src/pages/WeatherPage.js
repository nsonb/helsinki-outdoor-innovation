import React, {useEffect, useContext} from 'react';
import CurrentWeather from '../component/CurrentWeather';
import FutureWeatherHolder from '../component/FutureWeatherHolder';
import BackButton from '../component/BackButton';
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
    <div>
        <BackButton />
        <CurrentWeather />
        <FutureWeatherHolder />
    </div>
    )
}

export default WeatherPage;