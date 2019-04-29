import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase';

import Main from './app/Main';
import { config } from './firebase-cred';

export default class App extends React.Component {
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Main />
    );
  }
}
