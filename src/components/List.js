import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class List extends Component {
  componentDidMount(){
    //chama action creator para pegar os dados da lista
    this.props.fetchPosts();
  }

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

const mapStateToProps = () => {

}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(List);
