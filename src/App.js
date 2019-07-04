import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { View, Text } from 'react-native';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Router from './Router';

//higher order component: Provider
// enhance outro component

//create application state
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}; //functional component

export default App;
