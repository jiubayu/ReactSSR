import { createBrowserHistory, createMemoryHistory } from 'history';
import { createReduxHistoryContext, reachify } from "redux-first-history";

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
  //other options if needed 
});

export {
  createReduxHistory, routerMiddleware, routerReducer
}