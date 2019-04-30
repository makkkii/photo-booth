import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Button from '../common/Button';
import Input from '../common/Input';
import Title from '../common/Title';
import { createUser } from '../../actions/AuthActions';

class Signup extends Component {
  state = {
    user: '',
    password1: '',
    password2: ''
  };

  onChangeUser = (text) => {
    this.setState({
      user: text
    });
  };

  onChangePassword1 = (password) => {
    this.setState({
      password1: password
    });
  };
  onChangePassword2 = (password) => {
    this.setState({
      password2: password
    });
  };

  onPressSignUp = () => {
    this.props.createUser(this.state.user, this.state.password1);
  };

  onGoBack = () => {
    Actions.pop();
  }

  renderButtons() {
    if (this.props.auth.loading) {
      return <ActivityIndicator />
    } else {
      return <Button textButton="Signup" onPress={this.onPressSignUp.bind(this)} />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Title title="Photo Booth" />
        <Input placeholder="email@gmail.com"
          onChange={this.onChangeUser.bind(this)}
          value={this.state.user} />
        <Input placeholder="Password"
          secureTextEntry
          onChange={this.onChangePassword1.bind(this)}
          value={this.state.password} />
        <Input placeholder="Confirm Password"
          secureTextEntry
          onChange={this.onChangePassword2.bind(this)}
          value={this.state.password} />
        <Text>{this.props.auth.errorCreating}</Text>
        {this.renderButtons()}
        <TouchableOpacity onPress={this.onGoBack.bind(this)}>
          <View>
            <Text style={styles.text}>Already got an account, take me back!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { createUser }
)(Signup);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    color: 'blue',
    fontSize: 15
  }
})