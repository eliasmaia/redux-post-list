import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { fetchPost } from '../actions';

class PostDetail extends Component {
  componentDidMount(){
    this.props.fetchPost(this.props.postId); //precisamos passar o id
  }


  render(){
    const { title, body } = this.props.post;

    if (!this.props.post){
      return <Text>Carregando ... </Text>
    }

    return (
      <View>
        <Text>{title}</Text>
        <Text>{body}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { post: state.posts.selected};
}

export default connect(mapStateToProps, { fetchPost })(PostDetail);
