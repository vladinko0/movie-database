import 'react-native';
import React from 'react';
import Search from '../src/screens/search';
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
jest.mock('react-redux', () => ({
  useDispatch: () => {},
}));

it('renders correctly Search screen', () => {
  const search = renderer.create(<Search />);
  expect(search).toMatchSnapshot();
});
