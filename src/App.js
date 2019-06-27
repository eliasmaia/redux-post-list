import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { View, Text } from 'react-native';
import ReduxPromise from 'redux-promise';
import List from './components/List';
import { Provider } from 'react-redux';
import reducers from './reducers';

//higher order component: Provider
// enhance outro component

//create application state
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1, justifyContent: 'center' }}>
        <List />
      </View>
    </Provider>
  );
}; //functional component

export default App;
