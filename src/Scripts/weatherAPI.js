
export const getWeather = () => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Helsinki&appid=52aef8e7daa5ca4dd4b7b88e3d21d277`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
}