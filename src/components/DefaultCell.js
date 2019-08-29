import React, {Fragment} from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import styles from './DefaultCell.style.js';

import PropTypes from 'prop-types';

const DefaultCell = ({coin, action}) => {
  return (
    <TouchableHighlight onPress={action} style={styles.defaultCell}>
      <View>
        <Text style={styles.defaultText}>{coin}</Text>
      </View>
    </TouchableHighlight>
  );
};

DefaultCell.defaultProps = {
  coin: 'BTC-USD',
  action: () => console.log('abc'),
};

DefaultCell.propTypes = {
  coin: PropTypes.string,
  action: PropTypes.func,
};

export default DefaultCell;
