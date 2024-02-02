import type {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';
import {SCREENS} from '../../navigation/constants';

export type DetailProps = {
  route: RouteProp<RootStackParamList, SCREENS.DETAIL>;
};

export type TDetail = {
  title?: string;
  poster?: string;
  year?: string;
  genre?: string;
  plot?: string;
};
