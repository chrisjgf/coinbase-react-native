import React from 'react';
import {shallow} from 'enzyme';
import {Text} from 'react-native';
import DefaultCell from './DefaultCell';

describe('DefaultCell', () => {
  it('renders text', () => {
    const title = 'BTC-USD';
    const component = shallow(
      <DefaultCell currencyPair={title} onPressHandler={() => {}} />,
    );
    const text = component.find(Text);
    expect(text).toBeDefined();
  });
});
