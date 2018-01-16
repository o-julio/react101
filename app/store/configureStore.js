import {createStore, applyMiddleware } from 'redux';
import rootReducer from 'store/reducers/rootReducer';
import logger from 'store/middlewares/logger'

export default function configureStore() {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    // applyMiddleware(logger)
  );
}
