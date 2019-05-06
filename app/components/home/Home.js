import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { fetchPosts } from '../../actions/PostActions';


class Home extends Component {
  state = {
    posts: []
  }
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps() {
    if (this.props !== nextProps) {
      this.setState({
        posts: nextProps.posts.posts
      });
    }
  }

  renderPosts() {
    if (this.state.posts === undefined || this.state.posts.length === 0) {
      return (
        <View>
          <Text>You don't have any posts here yet!!</Text>
        </View>
      )
    } else {
      const arrayPosts = Object.values(this.state.posts)
      const keyPosts = Object.keys(this.state.posts)

      return arrayPosts.map((post, i) => {
        return <Post {...post} key={keyPosts[i]} postKey={keyPosts[i]} />;
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.ScrollContainer}>{this.renderPosts()}</ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  ScrollContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});