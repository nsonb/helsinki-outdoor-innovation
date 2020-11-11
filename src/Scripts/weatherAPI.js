const APIkey = '52aef8e7daa5ca4dd4b7b88e3d21d277';

// api doc for api call: https://openweathermap.org/forecast5
export const getWeather = (cityName) => {
  let apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid='+ APIkey;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
}

export const getWeatherOLD = () => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Berlin&appid=52aef8e7daa5ca4dd4b7b88e3d21d277`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
}

export const getWeatherAt = (long, lat) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,daily&appid=${APIkey}`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((result) => {
      return result;
    })
}