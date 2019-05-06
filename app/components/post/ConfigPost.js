import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { addPost } from '../../actions/PostActions';


class ConfigPost extends Component {
  state = {
    description: '',
    location: ''
  }

  onChangeDescription = (text) => {
    this.setState({
      description: text
    });
  };

  onChangeLocation = (text) => {
    this.setState({
      location: text
    })
  }

  onAddPost = () => {
    this.props.addPost(this.props.image, this.state.location, this.state.description)
  }

  render() {
    return (
      <View>
        <Text>Config Post </Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  image: state.post.post
});

export default connect(
  mapStateToProps,
  { addPost }
)(ConfigPost);