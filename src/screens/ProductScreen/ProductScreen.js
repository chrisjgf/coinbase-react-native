import React, {Fragment} from 'react';
import {SafeAreaView, ActivityIndicator, FlatList, Text} from 'react-native';
import CoinService from '../../services/CoinService';
import styles from './ProductScreen.style';
import ProductInfo from '../../components/ProductInfo/ProductInfo';

class ProductScreen extends React.Component {
  state = {
    isLoading: false,
    data: {
      id: 'BTC-USD',
      base_currency: 'BTC',
      quote_currency: 'USD',
      base_min_size: '0.00100000',
      base_max_size: '280.00000000',
      quote_increment: '0.01000000',
      base_increment: '0.00000001',
      display_name: 'BTC/USD',
      min_market_funds: '10',
      max_market_funds: '1000000',
      margin_enabled: false,
      post_only: false,
      limit_only: false,
      cancel_only: false,
      status: 'online',
      status_message: '',
    },
  };

  componentDidMount() {
    this.api = new CoinService();
    // this.fetchProduct();
  }

  // Fetch products
  fetchProduct() {
    // const {id} = this.props.navigation;
    this.api
      .fetch('/products/' + id)
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
          <ProductInfo data={data} />
        )}
      </SafeAreaView>
    );
  }
}

export default ProductScreen;