import { FETCH_WEATHER } from '../actions/types';

const initialState = { weatherInfo: [] };
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return { weatherInfo: action.payload };
    default:
      return state;
  }
}
