import React from 'react';
import {Text, View, FlatList} from 'react-native';
import styles from './ProductInfo.style';

import PropTypes from 'prop-types';

const ProductInfo = ({data}) => {
  const getData2dArray = () => {
    if (data == null || undefined) {
      return [];
    }
    const keys = Object.keys(data);
    return keys.map(k => {
      return {data: [k, data[k]]};
    });
  };
  return (
    <View>
      <FlatList
        data={getData2dArray()}
        renderItem={({item}) => (
          <View style={styles.productCell}>
            <Text style={styles.productText}>{item.data[0]}</Text>
            <Text style={styles.productText}>{item.data[1]}</Text>
          </View>
        )}
      />
    </View>
  );
};

ProductInfo.defaultProps = {
  data: null,
};

ProductInfo.propTypes = {
  data: PropTypes.object,
};

export default ProductInfo;
