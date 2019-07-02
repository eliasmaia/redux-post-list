import React from 'react';
import { Text } from 'react-native';

const ListItem = {( item )} => {
  const { title } = item;
  return (
    <Text>{title}</Text>
  );
};

export default ListItem;
