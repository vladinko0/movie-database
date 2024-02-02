import 'react-native';
import React from 'react';
import Detail from '../src/screens/detail';
import renderer from 'react-test-renderer';
import {DetailProps} from '../src/screens/detail/types';

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
  useAppDispatch: () => {},
  useAppSelector: () => [],
}));

const mockRoute = {
  params: {
    movie: {
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNmU0NmExYWYtY2E1YS00YWFlLTg5YmYtMjE2YWJkODRjNjk2XkEyXkFqcGdeQXVyNTU1MTE2MTI@._V1_SX300.jpg',
      Title: 'AAA Australian Open of Surfing',
      Type: 'movie',
      Year: '2016',
      imdbID: 'tt15176324',
    },
  },
} as DetailProps['route'];

it('renders correctly Details screen', () => {
  const detail = renderer.create(<Detail route={mockRoute} />);
  expect(detail).toMatchSnapshot();
});
