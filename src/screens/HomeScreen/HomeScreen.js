import React, {Fragment} from 'react';
import {SafeAreaView, ActivityIndicator, FlatList, Text} from 'react-native';
import styles from './HomeScreen.style.js';
import DefaultCell from '../../components/DefaultCell';
import CoinService from '../../services/CoinService';

class HomeScreen extends React.Component {
  state = {
    isLoading: true,
    data: [{coin: 'Coin1'}, {coin: 'Coin2'}],
  };

  componentDidMount() {
    this.api = new CoinService();
    this.fetchProducts();
  }

  // Fetch products
  fetchProducts() {
    this.api
      .fetch('/products')
      .then(response => {
        const data = response.map(obj => {
          return {coin: obj.id};
        });
        // console.log(data);
        console.log(response);
        this.setState({data, isLoading: false});
      })
      .catch(error => {
        console.log(error);
        alert('ERROR');
      });
  }

  render() {
    const {isLoading, data} = this.state;
    return (
      <SafeAreaView>
        {isLoading ? (
          <ActivityIndicator
            style={styles.activityIndicator}
            size="large"
            color="#0000ff"
          />
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => <DefaultCell coin={item.coin} />}
          />
        )}
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
