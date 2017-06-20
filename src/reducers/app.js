import * as CONSTANT from '../constants/app';

const initialState = {
  error: '',
  data: []
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {

    case CONSTANT.SET_ERROR:
      return {
        ...state,
        error: action.payload.error
      };

    case CONSTANT.SET_DATA:
      return {
        ...state,
        data: action.payload.data
      };

    default:
      return state;
  }

};
