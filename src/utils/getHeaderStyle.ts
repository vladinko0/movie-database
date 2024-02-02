import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Theme} from '../context/Theme/types';

export const getHeaderStyle = (theme: Theme) =>
  ({
    headerStyle: {
      backgroundColor: theme.cornflowerBlue,
    },
    headerTintColor: theme.white,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  } as NativeStackNavigationOptions);
