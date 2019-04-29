import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Home from './components/home/Home'

const RouterComponent = () => (
  <Router>
    <Stack key="root">
      <Stack key="auth" hideNavBar>
        <Scene key="login" component={Login} />
        <Scene key="signup" component={SignUp} />
      </Stack>
      <Stack key="app">
        <Scene key="home" component={Home} />
      </Stack>
    </Stack>
  </Router>
);

export default RouterComponent;