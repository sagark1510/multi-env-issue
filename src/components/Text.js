import React, { Component } from 'react';
import { Text as RNText } from 'react-native';
import PropTypes from 'prop-types';

/**
 * Text component
 */
class Text extends Component {
  /**
   * Render method
   *
   * @return {Component}
   */
  render() {
    const { style, children, ...props } = this.props;
    return (
      <RNText style={[{ color: 'black', fontSize: 14 }, style]}>
        {children}
      </RNText>
    );
  }
}

Text.propTypes = {
  style: PropTypes.any,
};

export default Text;
