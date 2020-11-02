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
        weather: '',
        weatherDesc: '',
        iconNum: '',
        feelsLike: '',
        cloudiness: '',
    });
    const [sixHours, setSixHours] = useState([]);

    const updateWeather = (cityName) => {
        if (!cityName) cityName = 'Helsinki'
        getWeather(cityName)
        .then((result) => {
            setWeather(result);
            createCurrentWeather(result);
            updateSixHours(result);
        });
    }

    const createCurrentWeather = (weatherData) => {
        const now = weatherData.list[0];
        //refactor weather item into a form you want
        const returnable = {
            temp: Math.round((now.main.temp-273.15 || currWeather.temp)* 10) / 10 + '° C',
            feelsLike: Math.round((now.main.feels_like-273.15 || currWeather.feelsLike)* 10) / 10 + '° C',
            wind: Math.round((now.wind.speed || currWeather.wind)* 10) / 10 + ' m/s',
            humidity: Math.round((now.main.humidity || currWeather.humidity)* 10) / 10 + ' %',
            weather: now.weather[0].main || currWeather.weather,
            weatherDesc: now.weather[0].description || currWeather.weatherDesc,
            iconNum: now.weather[0].icon || currWeather.iconNum,
            cloudiness: now.clouds.all || now.cloudiness
        };
        setCurrWeather(returnable);
    }

    const updateSixHours = (weatherData) => {
        console.log(weatherData);
        let newList = [];
        // 0 is now
        for (let i = 1; i < 40; i++) {
            let w = weatherData.list[i];
            //refactor weather items into a form you want
            let weatherItem = {
                time: w.dt_txt || '',
                wind: {
                    speed: Math.round((w.wind.speed || 0)* 10) / 10 || '', 
                    deg: w.wind.deg || ''
                },
                weather: w.weather[0].main,
                temp: Math.round((w.main.temp-273.15 || 0)* 10) / 10 + '° C',
                humidity: Math.round((w.main.humidity || 0)* 10) / 10 + '%',
                feelsLike: Math.round((w.main.feels_like -273.15|| 0)* 10) / 10 + '° C',
                iconNum: w.weather[0].icon || '',
                weatherDesc: w.weather[0].description || '',
                cloudiness: w.clouds.all || '' + '%'
            }
            //add it to the list
            newList = [...newList, weatherItem]
        }
        console.log(newList);
        setSixHours(newList);   
    }

    return (
        <WeatherContext.Provider value={{weather, updateWeather, currWeather, sixHours}}>
            {props.children}
        </WeatherContext.Provider>
    );
}