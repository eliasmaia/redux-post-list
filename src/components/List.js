import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import ListItem from './ListItem';

class List extends Component {
  componentDidMount(){
    //chama action creator para pegar os dados da lista
    this.props.fetchPosts();
  }

  onItemPress(id){
    //muda de cena para postDetail
    Actions.postDetail({ postId: id});
  }

  render(){
    const { posts } = this.props;

    if(!posts){
      return (
        <Text>Loading ...</Text>
      );
    }

    const postItems = posts.map(post => {
      return <ListItem key={post.id} item={ post } onItemPress={this.onItemPress} />;
    });

    console.log(this.props);

    return (
      <ScrollView>
        {postItems}
      </ScrollView>
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
