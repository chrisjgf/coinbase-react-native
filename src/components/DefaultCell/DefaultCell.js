import React, {Fragment} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import styles from './DefaultCell.style.js';

import PropTypes from 'prop-types';

const DefaultCell = ({currencyPair, onPressHandler}) => {
  return (
    <TouchableHighlight
      onPress={() => onPressHandler(currencyPair)}
      style={styles.defaultCell}>
      <View>
        <Text style={styles.defaultText}>{currencyPair}</Text>
      </View>
    </TouchableHighlight>
  );
};

DefaultCell.defaultProps = {
  currencyPair: '-',
};

DefaultCell.propTypes = {
  currencyPair: PropTypes.string,
  onPressHandler: PropTypes.func.isRequired,
};

export default DefaultCell;
