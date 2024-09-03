import React, { useEffect } from 'react';
import routesConfig from './routesConfig';
import { useRoutes } from 'react-router-dom'; 
import Header from './components/Header';
import { Provider } from 'react-redux';
import actionCreators from './store/actionCreators/auth';
import styles from './App.css';
import useStyles from 'isomorphic-style-loader-react18/useStyles';

function App({ store }) {
  // useStyles(styles);
  return (
    <Provider store={store}>
      <Header />
      {useRoutes(routesConfig)}
    </Provider>
  )
}

App.loadData = (store) => {
  return store.dispatch(actionCreators.validate());
}

export default App;