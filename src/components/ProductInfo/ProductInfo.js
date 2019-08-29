import React from 'react';
import {Text, View, FlatList} from 'react-native';
import styles from './ProductInfo.style';

import PropTypes from 'prop-types';

const ProductInfo = ({data}) => {
  const getData2dArray = () => {
    const keys = Object.keys(data);
    return keys.map(k => [k, data[k]]);
  };
  // FIXME: - This is not displaying correctly ...
  return (
    <View>
      <FlatList
        data={getData2dArray()}
        renderItem={data => (
          <View style={styles.productCell}>
            <Text>a + {data[0]} + b</Text>
            <Text>b + {data[4]}</Text>
          </View>
        )}
      />
    </View>
  );
};

ProductInfo.defaultProps = {
  data: {},
};

ProductInfo.propTypes = {
  data: PropTypes.object,
};

export default ProductInfo;
