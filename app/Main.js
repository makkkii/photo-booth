import React, { Component } from 'react'
import { Text, View } from 'react-native';

import Button from './components/common/Button'

export default class Main extends Component {
  render() {
    return (
      <View>
        <Text>I'm Main</Text>
        <Button textButton='Submit' />
      </View>
    )
  }
}