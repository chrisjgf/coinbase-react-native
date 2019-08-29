import React, {Fragment} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import styles from './DefaultCell.style.js';

import PropTypes from 'prop-types';

const DefaultCell = ({coin, onPress}) => {
  console.log('COIN', coin);
  return (
    <TouchableHighlight
      onPress={() => onPress(coin)}
      style={styles.defaultCell}>
      <View>
        <Text style={styles.defaultText}>{coin}</Text>
      </View>
    </TouchableHighlight>
  );
};

DefaultCell.defaultProps = {
  coin: 'BTC-USD',
};

DefaultCell.propTypes = {
  coin: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

export default DefaultCell;
