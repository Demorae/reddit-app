import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk as thunkMiddleware } from 'redux-thunk'; 

import rootReducer from '../reducers/redditReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

export default store;