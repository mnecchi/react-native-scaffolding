import { FETCHED_WEATHER } from './constants';
import { AnyAction } from 'redux';
import { FetchWeatherAction } from './actions';
import { WeatherState } from './types';

const initialState: WeatherState = {};

export const weatherReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCHED_WEATHER: {
      const { payload } = action as FetchWeatherAction;
      const { temp, feels_like } = payload;
      return { ...state, temp, feels_like };
    }
    default:
      return state;
  }
};

export default weatherReducer;
