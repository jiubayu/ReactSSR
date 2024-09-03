import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk, withExtraArgument } from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise';
import counter from './reducers/counter';
import user from './reducers/user';
import clientRequest from '@/client/request';
import serverRequest from '@/server/request';
import auth from './reducers/auth';

import { createBrowserHistory, createMemoryHistory } from 'history';
import { createReduxHistoryContext, reachify } from "redux-first-history";



export function getClientStore() {
  const initialstate = window.context.state;

  const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
    //other options if needed 
  });

  const reducers = { counter, user, auth, router: routerReducer };
  const combineRecer = combineReducers(reducers);
  const store = applyMiddleware(withExtraArgument(clientRequest), promise, routerMiddleware, logger)(createStore)(combineRecer, initialstate);
  const history = createReduxHistory(store);
  return { history, store };
}

export function getServerStore(req) {
  const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createMemoryHistory(),
    //other options if needed 
  });
  
  const reducers = { counter, user, auth, router: routerReducer };
  const combineRecer = combineReducers(reducers);
  const store = applyMiddleware(withExtraArgument(serverRequest(req)), promise, routerMiddleware, logger)(createStore)(combineRecer);
  const history = createReduxHistory(store);
  return { history, store };
}