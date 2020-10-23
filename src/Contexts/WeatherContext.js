import React, { createContext,  useState } from 'react';
import { 
    getWeather
 } from '../Scripts/weatherAPI';

//services that cannot be searched but will show on toggle
//includes shops, cafes, toilets, bus stops, parking etc.
export const WeatherContext = createContext();
export const WeatherContextProvider = (props) => {
    const [weather, setWeather] = useState({});
    const [currWeather, setCurrWeather] = useState({});

//-getToilets().then(res => {return {toilets: res}}),
    const updateWeather = () => {
        
        return getWeather()
        .then((result) => {
            setWeather(result);
            return true;

        });
    }

    const miniWeather = () => {
        console.log(weather);
        const now = weather.list[0];

        const returnable = {"temp":now.main.temp}

        setCurrWeather(returnable);
    }

    return (
        <WeatherContext.Provider value={{weather, updateWeather, currWeather, miniWeather}}>
            {props.children}
        </WeatherContext.Provider>
    );
}