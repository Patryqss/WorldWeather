const day1 = new Date();
const day2 = new Date(day1);
const day3 = new Date(day1);
const day4 = new Date(day1);
const day5 = new Date(day1);

day2.setDate(day2.getDate() + 1);
day3.setDate(day3.getDate() + 2);
day4.setDate(day4.getDate() + 3);
day5.setDate(day5.getDate() + 4);

export const weatherInfoArray = [
  {
    date: day1.toJSON().slice(0, 10).replace(/-/g, '-'),
    meanTemp: 0,
    minTemp: 999,
    maxTemp: -999,
    morningTemp: 0,
    dayTemp: 0,
    nightTemp: 0,
    humidity: 0,
    sky: '',
  },
  {
    date: day2.toJSON().slice(0, 10).replace(/-/g, '-'),
    meanTemp: 0,
    minTemp: 999,
    maxTemp: -999,
    morningTemp: 0,
    dayTemp: 0,
    nightTemp: 0,
    humidity: 0,
    sky: '',
  },
  {
    date: day3.toJSON().slice(0, 10).replace(/-/g, '-'),
    meanTemp: 0,
    minTemp: 999,
    maxTemp: -999,
    morningTemp: 0,
    dayTemp: 0,
    nightTemp: 0,
    humidity: 0,
    sky: '',
  },
  {
    date: day4.toJSON().slice(0, 10).replace(/-/g, '-'),
    meanTemp: 0,
    minTemp: 999,
    maxTemp: -999,
    morningTemp: 0,
    dayTemp: 0,
    nightTemp: 0,
    humidity: 0,
    sky: '',
  },
  {
    date: day5.toJSON().slice(0, 10).replace(/-/g, '-'),
    meanTemp: 0,
    minTemp: 999,
    maxTemp: -999,
    morningTemp: 0,
    dayTemp: 0,
    nightTemp: 0,
    humidity: 0,
    sky: '',
  },
];
