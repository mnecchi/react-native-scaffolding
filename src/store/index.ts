import { createStore, combineReducers, applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';
import weather from '../weather/reducer';
import reduxDebugger from 'redux-flipper';

const rootReducer = combineReducers({
  weather,
});

const middlewares: Middleware[] = [thunk];

if (__DEV__) {
  middlewares.push(reduxDebugger());
}

const configureStore = createStore(rootReducer, applyMiddleware(...middlewares));

export default configureStore;
