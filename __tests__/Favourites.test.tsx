import 'react-native';
import React from 'react';
import Favourites from '../src/screens/favourites';
import renderer from 'react-test-renderer';

jest.mock('@react-native-async-storage/async-storage', () => ({
  AsyncStorage: () => {},
}));
jest.mock('redux-persist', () => ({
  persistStore: () => {},
  persistReducer: () => {},
}));
jest.mock('@reduxjs/toolkit', () => ({
  configureStore: () => {},
  createSlice: () => {},
}));
jest.mock('../src/reduxStore', () => ({
  movieSlice: () => {},
}));
jest.mock('@react-navigation/native', () => ({
  useIsFocused: () => {},
}));

it('renders correctly Favourites screen', () => {
  const favourites = renderer.create(<Favourites />);
  expect(favourites).toMatchSnapshot();
});
