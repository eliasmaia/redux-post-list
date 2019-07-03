import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const ListItem = ( {item} ) => {
  const { title } = item;
  return (
    <TouchableOpacity style={styles.itemStyle} onPress={() => null}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    marginBottom: 10
  }
});

export default ListItem;
