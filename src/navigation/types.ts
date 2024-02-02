import {SCREENS} from './constants';
import {NavigationProp} from '@react-navigation/native';
import {TMovieItem} from '../screens/search/types';

export type RootStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.SEARCH]: undefined;
  [SCREENS.FAVOURITES]: undefined;
  [SCREENS.DETAIL]: {movie: TMovieItem};
};

export type StackNavigation = NavigationProp<RootStackParamList>;
