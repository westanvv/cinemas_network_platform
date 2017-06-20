import * as CONSTANT from '../constants/app'
import sendRequest from '../services/api'

export function setError(error = '') {
  return (dispatch) => {
    dispatch({
      type: CONSTANT.SET_ERROR,
      payload: {
        error: error,
      },
    });

    return Promise.resolve();
  }
}

export function cleanError() {
  return setError();
}

export function getData() {
  return (dispatch) => {
    return sendRequest(`users`)
      .then(response => {
          dispatch({
            type: CONSTANT.SET_DATA,
            payload: {
              data: response.data,
            },
          });
      });
  }
}
