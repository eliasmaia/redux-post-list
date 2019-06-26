import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ListItem from './ListItem';

class List extends Component {
  render(){
    return (
      <View>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </View>
    );
  }
}

export default List;
