import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Landing from './containers/Landing';
import Login from './containers/Login';
import Signup from './containers/Signup';

const Router = createStackNavigator({
  Landing,
  Login,
  Signup,
});

export default Router;
