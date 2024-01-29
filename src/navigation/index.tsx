import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SCREENS} from './constants';
import {RootStackParamList} from './types';
import Home from '../screens/home';
import Search from '../screens/search';
import Favourites from '../screens/favourites';
import Detail from '../screens/detail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name={SCREENS.HOME} component={Home} />
        <Stack.Screen name={SCREENS.SEARCH} component={Search} />
        <Stack.Screen name={SCREENS.FAVOURITES} component={Favourites} />
        <Stack.Screen name={SCREENS.DETAIL} component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
