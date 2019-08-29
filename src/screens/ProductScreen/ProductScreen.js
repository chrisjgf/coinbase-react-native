import React, {Fragment} from 'react';
import {SafeAreaView, ActivityIndicator, FlatList, Text} from 'react-native';
import CoinService from '../../services/CoinService';
import styles from './ProductScreen.style';
import ProductInfo from '../../components/ProductInfo/ProductInfo';

class ProductScreen extends React.Component {
  state = {
    isLoading: false,
    data: null,
  };

  componentDidMount() {
    this.api = new CoinService();
    this.fetchProductDetails();
  }

  // Fetch products
  fetchProductDetails = async () => {
    const itemId = this.props.navigation.getParam('itemId');
    console.log('ITEMID', itemId);
    this.api
      .fetch('/products/' + itemId)
      .then(response => {
        this.setState({data: response, isLoading: false});
      })
      .catch(error => {
        console.log(error);
        alert('ERROR Product Screen');
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
          <ProductInfo data={data} />
        )}
      </SafeAreaView>
    );
  }
}

export default ProductScreen;
