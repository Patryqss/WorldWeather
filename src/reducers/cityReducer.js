import { UPDATE_CITY } from '../actions/types';

const initialState = { selected: '' };
export default function cityReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CITY:
      return { selected: action.payload };
    default:
      return state;
  }
}
