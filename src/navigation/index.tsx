import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SCREENS} from './constants';
import {RootStackParamList} from './types';
import Home from '../screens/home';
import Search from '../screens/search';
import Favourites from '../screens/favourites';
import Detail from '../screens/detail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '../context/Theme';
import {getHeaderStyle} from '../utils/getHeaderStyle';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const {theme} = useTheme();
  const headerStyle = getHeaderStyle(theme);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen
          name={SCREENS.HOME}
          component={Home}
          options={headerStyle}
        />
        <Stack.Screen
          name={SCREENS.SEARCH}
          component={Search}
          options={headerStyle}
        />
        <Stack.Screen
          name={SCREENS.FAVOURITES}
          component={Favourites}
          options={headerStyle}
        />
        <Stack.Screen
          name={SCREENS.DETAIL}
          component={Detail}
          options={headerStyle}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
