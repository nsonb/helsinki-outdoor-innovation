import React, { createContext,  useState } from 'react';
import { 
    getWeather
 } from '../Scripts/weatherAPI';

export const WeatherContext = createContext();
export const WeatherContextProvider = (props) => {
    const [weather, setWeather] = useState({
        cod: "",
        message: 0,
        cnt: 0,
        list: [],
        city: {}
    });
    const [currWeather, setCurrWeather] = useState({
        temp: '',
        wind: '',
        humidity: '',
        clouds: '',
        iconNum: ''
    });
    const [sixHours, setSixHours] = useState([]);

    const updateWeather = () => {
        getWeather()
        .then((result) => {
            setWeather(result);
            //create miniweather content at the same time
            const now = result.list[0];
            const returnable = {
                temp: Math.round((now.main.temp-273.15 || currWeather.temp)* 10) / 10 + '° C',
                wind: Math.round((now.wind.speed || currWeather.wind)* 10) / 10 + ' m/s',
                humidity: Math.round((now.main.humidity || currWeather.humidity)* 10) / 10 + ' %',
                clouds: now.weather[0].main || currWeather.clouds,
                iconNum: now.weather[0].icon || currWeather.iconNum
            };
            setCurrWeather(returnable);
        });
    }

    const updateSixHours = () => {
        let newList = [];
        for (let i = 0; i < 6; i++) {
            let w = weather.list[i];
            //refactor weather items into a form you want
            let weatherItem = {
                time: w.dt_txt || '',
                wind: {
                    speed: Math.round((w.wind.speed || 0)* 10) / 10 || '', 
                    deg: w.wind.deg || ''},
                clouds: w.weather[0].main,
                temp: Math.round((w.main.temp-273.15 || 0)* 10) / 10,
                humidity: Math.round((w.main.humidity || 0)* 10) / 10,
                feelsLike: Math.round((w.main.feels_like || 0)* 10) / 10,
                iconNum: w.weather[0].icon || ''
            }
            //add it to the list
            newList = [...newList, weatherItem]
        }
        setSixHours(newList);   
    }

    return (
        <WeatherContext.Provider value={{weather, updateWeather, currWeather, updateSixHours, sixHours}}>
            {props.children}
        </WeatherContext.Provider>
    );
}