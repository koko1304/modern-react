// Frameworks
import { combineReducers } from 'redux';

// Reducers
import Weather from './weather';

const rootReducer = combineReducers({
  weather: Weather
});

export default rootReducer;
