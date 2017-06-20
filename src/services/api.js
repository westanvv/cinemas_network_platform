import log from '../services/log'

import * as APP_CONSTANT from '../constants/app'

function checkStatus(response) {
  if (response.status === 500) {
    return Promise.reject(response);
  } else {
    return Promise.resolve(response);
  }
}

function parseJSON(response) {
  return response.json().then(json => {
    return {
      data: json,
      status: response.status,
      headers: response.headers.map,
    };
  }).catch(error => {
    //handle when we don't have a data in response

    return Promise.resolve({
      data: {},
      status: response.status,
      headers: response.headers.map,
    });
  });
}

function preProcessResponse(url, response) {
  let responseForLog = {
    url: url,
    ...response
  };
  log('API Received', responseForLog, APP_CONSTANT.LOGGER.level.api);

  return Promise.resolve(response);
}

export default function sendRequest(url = '', method = 'POST', data = {}) {
  //setting headers
  let headers = {
    'Content-Type': 'application/json',
  };
  //setting params
  let params = {
    method,
    headers,
  };

  //If data is an empty object, we don't need to pass it through body
  if (JSON.stringify(data) !== JSON.stringify({})) {
    params.body = JSON.stringify(data);
  }

  log('API Send', {
    url: url,
    method: method,
    data: data,
    headers: headers
  }, APP_CONSTANT.LOGGER.level.api);

  return (fetch(APP_CONSTANT.API_URL + url, params)
    .then(parseJSON)
    .then(response => {
      return preProcessResponse(url, response);
    })
    .then(checkStatus)
    .catch(response => {
      return Promise.reject(response);
    })
  );
}
