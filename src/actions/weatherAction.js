import { FETCH_WEATHER } from './types';
import { getInfoFromWeather } from '../utils/getInfoFromWeather';

export const fetchWeather = (city) => (dispatch) => {
  let fetchedData = [];
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=93edfd2519097efa91bca26d21796763`)
    .then((res) => res.json())
    .then((data) => data.list)
    .then((array) => {
      array.map((x) =>
        fetchedData.push({
          date: x.dt_txt.slice(0, 10),
          hour: x.dt_txt.slice(11, 19),
          temperature: Math.round(x.main.temp - 273.15), //From Kelvin to Celsius
          humidity: x.main.humidity,
          sky: x.weather[0].description,
        }),
      );

      return dispatch({ type: FETCH_WEATHER, payload: getInfoFromWeather(fetchedData) });
    })
    .catch(() => {
      fetchedData = 'City not found';
      return dispatch({ type: FETCH_WEATHER, payload: fetchedData });
    });
};
