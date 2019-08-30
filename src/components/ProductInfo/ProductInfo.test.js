import React from 'react';
import {shallow} from 'enzyme';
import ProductInfo from './ProductInfo';

describe('ProductInfo', () => {
  const data = {
    id: 'BTC-USD',
    base_currency: 'BTC',
    quote_currency: 'USD',
  };
  it('is defined', () => {
    const component = shallow(<ProductInfo data={data} />);
    expect(component).toBeDefined();
  });
});
