import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Button from '../common/Button';
import Input from '../common/Input';
import Title from '../common/Title';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
  state = {
    user: '',
    password: ''
  };

  onChangeUser = (text) => {
    this.setState({
      user: text
    });
  };

  onChangePassword = (text) => {
    this.setState({
      password: text
    });
  };

  onPressSignUp = () => {
    // Move to signup page
  };

  onGoBack = () => {
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Title title="Photo Booth" />
        <Input placeholder="email@gmail.com"
          onChange={this.onChangeUser.bind(this)}
          value={this.state.user} />
        <Input placeholder="Password"
          onChange={this.onChangePassword.bind(this)}
          value={this.state.password} />
        <Button textButton="Signup"
          onPress={this.onPressSignUp.bind(this)} />
        <TouchableOpacity onPress={this.onGoBack.bind(this)}>
          <View>
            <Text style={styles.text}>Already got an account, take me back!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

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