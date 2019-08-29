import React, {Fragment} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  AsyncStorage,
} from 'react-native';
import styles from './HomeScreen.style.js';
import DefaultCell from '../../components/DefaultCell/DefaultCell';
import CoinService from '../../services/CoinService';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      isLoading: true,
      data: [{coin: 'Coin1'}, {coin: 'Coin2'}],
    };
  }

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
          return {coin: obj.id};
        });
        this.setState({data, isLoading: false}, () => {
          AsyncStorage.setItem('allCoins', JSON.stringify(data));
        });
      })
      .catch(error => {
        this.handleOfflineResponse().then(data => {
          this.setState({data: JSON.parse(data), isLoading: false});
        });
      });
  };

  handleOfflineResponse = async () => {
    try {
      return (await AsyncStorage.getItem('allCoins')) || [];
    } catch (error) {
      console.log('ERROR', error);
      return false;
    }
  };

  handleCoinSelection = () => {
    // console.log(this.props);
    this.props.navigation.push('Product', {
      itemId: 'BTC-USD',
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
                coin={item.coin}
                onPress={() => this.handleCoinSelection()}
              />
            )}
          />
        )}
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
