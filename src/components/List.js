import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import ListItem from './ListItem';

class List extends Component {
  componentDidMount(){
    //chama action creator para pegar os dados da lista
    this.props.fetchPosts();
  }

  render(){
    if(!this.props.posts){
      return (
        <Text>Loading ...</Text>
      );
    }

    console.log(this.props);

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

const mapStateToProps = (state) => {
  return { posts: state.posts.all };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPosts: fetchPosts} , dispatch);
  //same JS ES6 return bindActionCreators({ fetchPosts} , dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
