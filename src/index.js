import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// merge reducers in different 'sections' of the app
// Redux add one layer of nesting to avoid naming conflicts
const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

// middleware runs b/w the dispatching of actions to the reducers
const logger = store => {
  return next => {
    return action => {
      // do something with the action
      console.log('[Middleware] dispatching ', action);
      // pass on the action to the reducer
      const result = next(action);
      console.log('[Middleware] next state: ', store.getState());
      return result;
    };
  };
};

// use || to provide a default compose function as a fallback
// compose is similar to combineReducers, it combines enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// use the applyMiddleware enhancer to pass one
// or multiple instances of middleware to the store
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(logger, thunk)
));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
