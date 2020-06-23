import { FETCHED_WEATHER } from './constants';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RAPIDAPI_URL, RAPIDAPI_HOST, RAPIDAPI_KEY } from 'react-native-dotenv';
import { State } from 'src/store/types';

interface WeatherResult {
  temp: number;
  feels_like: number;
}

export interface FetchWeatherAction extends Action {
  type: typeof FETCHED_WEATHER;
  payload: WeatherResult;
}

export const fetchWeather = (): ThunkAction<Promise<void>, State, undefined, FetchWeatherAction> => async (
  dispatch
) => {
  try {
    const response = await fetch(`${RAPIDAPI_URL}?q=London,uk&units=metric`, {
      headers: {
        'X-RapidAPI-Host': RAPIDAPI_HOST,
        'X-RapidAPI-Key': RAPIDAPI_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`Http Error ${response.status}: ${response.statusText}`);
    }

    const { main } = (await response.json()) as { main: WeatherResult };
    dispatch({
      type: FETCHED_WEATHER,
      payload: {
        ...main,
      },
    });
  } catch (error) {
    // Do something with error
  }
};
