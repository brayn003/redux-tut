import { combineReducers, createStore } from 'redux';

import countReducer from './count';
import diffReducer from './diff';

const allReducers = combineReducers({
  countReducer,
  diffReducer,
})

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;