import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers';
import reducers from './main/reducers';

import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

export const history = createBrowserHistory()
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
&& window.__REDUX_DEVTOOLS_EXTENSION__()

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        (multi, thunk, promise)(createStore)(reducers, devTools)
      ),
    ),
  )

  return store
}