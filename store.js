import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
// import { createLogger } from 'redux-logger';
// const logger = createLogger({ collapsed: true, diff: true });

const initialState = {};

export const initStore = initialState => {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};
