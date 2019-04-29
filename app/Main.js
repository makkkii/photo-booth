import React, { Component } from 'react'
import { Text, View } from 'react-native';

import Button from './components/common/Button';
import Login from './components/auth/Login';

export default class Main extends Component {
  render() {
    return (
      <View>
        <Login />
      </View>
    )
  }
}