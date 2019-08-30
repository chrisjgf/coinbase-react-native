import React from 'react';
import {FlatList} from 'react-native';
import {shallow} from 'enzyme';
import HomeScreen from './HomeScreen';

describe('HomeScreen', () => {
  let component;
  const mounted = () => shallow(<HomeScreen />);

  beforeEach(async () => {
    component = mounted();
  });

  it('is defined', () => {
    expect(component).toBeDefined();
  });

  it('contains FlatList', () => {
    const flatList = component.find(FlatList);
    expect(flatList).toBeTruthy();
  });

  it('checks if Async Storage is used', async () => {
    await asyncOperationOnAsyncStorage();
    expect(AsyncStorage.getItem).toBeCalledWith('allCoins');
  });
});
