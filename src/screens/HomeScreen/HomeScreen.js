import React, {Fragment} from 'react';
import {SafeAreaView, StyleSheet, FlatList, Text} from 'react-native';
import styles from './HomeScreen.style.js';
import DefaultCell from '../../components/DefaultCell';

class HomeScreen extends React.Component {
  componentDidMount() {
    // API here
  }
  render() {
    return (
      <SafeAreaView>
        <Text style={styles.headerText}>24 hour coinbase data</Text>
        <FlatList
          data={[{coin: 'a'}, {coin: 'b'}]}
          renderItem={({item}) => <DefaultCell coin={item.coin} />}
        />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
