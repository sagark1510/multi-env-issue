import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from '../components';
import Config from 'react-native-config';

/**
 * Landing component
 */
class Landing extends Component {
  static navigationOptions = {
    title: 'Landing',
  };
  /**
   * Render method
   *
   * @return {Component}
   */
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text> {Config.ENVIRONMENT}</Text>
      </View>
    );
  }
}

export default Landing;
