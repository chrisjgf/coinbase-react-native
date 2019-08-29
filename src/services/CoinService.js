export default class CoinbaseAPI {
  constructor() {
    this.url = 'https://api.pro.coinbase.com/';
  }

  async fetch(query) {
    return fetch(this.url + query).then(response => {
      return response.json();
    });
  }
}
