import React from 'react';
import { View, Text } from 'react-native';
import List from './components/List';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center' }}>
      <List />
    </View>
  );
}; //functional component

export default App;
