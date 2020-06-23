import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, Text } from 'react-native';
import { fetchWeather } from './weather/actions';
import { State } from './store/types';

const Home: FC<{}> = () => {
  const dispatch = useDispatch();

  const temp = useSelector((state: State) => state.weather.temp);
  const feels_like = useSelector((state: State) => state.weather.feels_like);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  if (temp === undefined || feels_like === undefined) {
    return null;
  }

  return (
    <SafeAreaView>
      <Text>{`Temp: ${temp}`}</Text>
      <Text>{`Feels Like: ${feels_like}`}</Text>
    </SafeAreaView>
  );
};

export default React.memo(Home);
