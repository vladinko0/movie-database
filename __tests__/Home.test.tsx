import 'react-native';
import React from 'react';
import Home from '../src/screens/home';

import renderer from 'react-test-renderer';

jest.mock('react-native-really-awesome-button', () => ({
  ThemedButton: () => {},
}));
jest.mock('react-native-really-awesome-button', () => ({
  ThemedButton: () => {},
}));
const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

it('renders correctly Home screen', () => {
  const home = renderer.create(<Home />);
  expect(home).toMatchSnapshot();
});
