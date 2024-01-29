import {SCREENS} from './constants';
import {NavigationProp} from '@react-navigation/native';

export type RootStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.SEARCH]: undefined;
  [SCREENS.FAVOURITES]: undefined;
  [SCREENS.DETAIL]: undefined;
};

export type StackNavigation = NavigationProp<RootStackParamList>;
