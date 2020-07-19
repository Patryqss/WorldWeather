import { UPDATE_CITY } from './types';

export const updateCity = (newCity) => (dispatch) => {
  return dispatch({
    type: UPDATE_CITY,
    payload: newCity,
  });
};
