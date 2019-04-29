import React, { Component } from 'react';
import { View } from 'react-native';

import Button from '../common/Button';
import Input from '../common/Input';
import Title from '../common/Title';

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

  onPressLogin = () => {
    // Call firebase to login
  };

  onPressSignUp = () => {
    // Move to signup page
  };

  render() {
    return (
      <View>
        <Title title="Photo Booth" />
        <Input placeholder="email@gmail.com"
          onChange={this.onChangeUser.bind(this)}
          value={this.state.user} />
        <Input placeholder="Password"
          onChange={this.onChangePassword.bind(this)}
          value={this.state.password} />
        <Button textButton="Login"
          onPress={this.onPressLogin.bind(this)} />
        <Button textButton="Signup"
          onPress={this.onPressSignUp.bind(this)} />
      </View>
    );
  }
};
