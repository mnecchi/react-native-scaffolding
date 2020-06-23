import { WeatherState } from 'src/weather/types';
import { CombinedState } from 'redux';

export type State = CombinedState<{
  weather: WeatherState;
}>;
