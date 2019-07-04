import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import List from './components/List';
import PostDetail from './components/PostDetail';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="list" component={List} title="Lista de Posts" initial/>
      <Scene key="postDetail" component={PostDetail} title="Ver Post" />
    </Router>
  );
} ;

export default RouterComponent;
