import React, {Fragment} from 'react';
import {SafeAreaView, ActivityIndicator, FlatList, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './HomeScreen.style.js';
import DefaultCell from '../../components/DefaultCell/DefaultCell';
import CoinService from '../../services/CoinService';

class HomeScreen extends React.Component {
  state = {
    isLoading: true,
    data: null,
  };

  componentDidMount() {
    this.api = new CoinService();
    this.fetchProducts();
  }

  // Fetch products
  fetchProducts = async () => {
    this.api
      .fetch('/products')
      .then(response => {
        const data = response.map(obj => {
          return {currencyPair: obj.id};
        });
        this.setState({data, isLoading: false}, () => {
          AsyncStorage.setItem('allCoins', JSON.stringify(data));
        });
      })
      .catch(error => {
        this.handleOfflineResponse()
          .then(data => {
            const parsedData = JSON.parse(data);
            if (parsedData === null) {
              throw new Error();
            }
            this.setState({data: parsedData, isLoading: false});
          })
          .catch(() => {
            this.setState({data: null, isLoading: false}, () => {
              Alert.alert('An error occurred. Please try again later.');
            });
          });
      });
  };

  // Handle offline response and serve local data if available
  handleOfflineResponse = async () => {
    return await AsyncStorage.getItem('allCoins');
  };

  // Pass itemId through to query on the next view
  handleCoinSelection = itemId => {
    this.props.navigation.push('Product', {
      itemId: itemId,
    });
  };

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
            renderItem={({item}) => (
              <DefaultCell
                currencyPair={item.currencyPair}
                onPressHandler={this.handleCoinSelection}
              />
            )}
            keyExtractor={(item, index) => 'key' + index}
          />
        )}
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
