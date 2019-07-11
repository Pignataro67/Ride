import { combineReducers } from 'redux';
import confirmRoutereducer from './confirmRouteReducer';
import mapboxReducer from './mapboxReducer';
import resultsReducer from './resultsReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  mapboxReducer,
  searchReducer,
  confirmRoutereducer,
  resultsReducer
});

export default rootReducer;