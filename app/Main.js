import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers';

import Button from './components/common/Button';
import RouterComponent from './Router';

export default class Main extends Component {
  render() {
    return (
      <Provider store={createStore(reducer, {}, applyMiddleware(ReduxThunk))}>
        <RouterComponent />
      </Provider>
    )
  }
}