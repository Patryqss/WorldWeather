import { weatherInfoArray } from './weatherInfoTemplate';

export const getInfoFromWeather = (weather) => {
  let wIA = weatherInfoArray;
  const daysInfo = [];

  //filtering single days
  for (let i = 0; i < 5; i++) {
    daysInfo.push(weather.filter((day) => day.date === wIA[i].date));
  }

  //mean temperatures, humidity and mode value of sky
  for (let i = 0; i < 5; i++) {
    wIA[i].meanTemp = Math.round(daysInfo[i].reduce((total, next) => total + next.temperature, 0) / daysInfo[i].length);
    wIA[i].humidity = Math.round(daysInfo[i].reduce((total, next) => total + next.humidity, 0) / daysInfo[i].length);
    wIA[i].sky = findModeValue(daysInfo[i].map((a) => a.sky));
  }

  //min and max temperatures
  for (let i = 0; i < daysInfo[0].map((a) => a.temperature).length; i++) {
    wIA[0].maxTemp = Math.max(wIA[0].maxTemp, daysInfo[0].map((a) => a.temperature)[i]);
    wIA[0].minTemp = Math.min(wIA[0].minTemp, daysInfo[0].map((a) => a.temperature)[i]);
  }

  for (let j = 1; j < 5; j++) {
    for (let i = 0; i < daysInfo[1].map((a) => a.temperature).length; i++) {
      wIA[j].maxTemp = Math.max(wIA[j].maxTemp, daysInfo[j].map((a) => a.temperature)[i]);
      wIA[j].minTemp = Math.min(wIA[j].minTemp, daysInfo[j].map((a) => a.temperature)[i]);
    }
  }

  // morning, day and night temperatures
  daysInfo[0].find((x) => x.hour === '06:00:00')
    ? (wIA[0].morningTemp = daysInfo[0].find((x) => x.hour === '06:00:00').temperature)
    : (wIA[0].morningTemp = 'none');
  daysInfo[0].find((x) => x.hour === '15:00:00')
    ? (wIA[0].dayTemp = daysInfo[0].find((x) => x.hour === '15:00:00').temperature)
    : (wIA[0].dayTemp = 'none');
  daysInfo[0].find((x) => x.hour === '21:00:00')
    ? (wIA[0].nightTemp = daysInfo[0].find((x) => x.hour === '21:00:00').temperature)
    : (wIA[0].nightTemp = 'none');
  for (let i = 1; i < 5; i++) {
    wIA[i].morningTemp = daysInfo[i][2].temperature;
    wIA[i].dayTemp = daysInfo[i][5].temperature;
    wIA[i].nightTemp = daysInfo[i][7].temperature;
  }

  return [...wIA];
};

const findModeValue = (a) =>
  Object.values(
    a.reduce((count, e) => {
      if (!(e in count)) {
        count[e] = [0, e];
      }
      count[e][0]++;
      return count;
    }, {}),
  ).reduce((a, v) => (v[0] < a[0] ? a : v), [0, null])[1];
