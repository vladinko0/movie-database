import React, {FC, memo, useCallback} from 'react';
import {View} from 'react-native';
import {useTheme} from '../../context/Theme';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {StackNavigation} from '../../navigation/types';
import {SCREENS} from '../../navigation/constants';
import {ThemedButton} from 'react-native-really-awesome-button';

const Home: FC = () => {
  const {theme} = useTheme();
  const navigation = useNavigation<StackNavigation>();

  const onSearchPress = useCallback(
    () => navigation.navigate(SCREENS.SEARCH),
    [],
  );

  const onFavouritesPress = useCallback(
    () => navigation.navigate(SCREENS.FAVOURITES),
    [],
  );

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={[theme.cornflowerBlue, theme.frenchPass]}
        style={styles.gradient}>
        <ThemedButton name="basic" type="primary" onPress={onSearchPress}>
          Search
        </ThemedButton>
        <View style={styles.space} />
        <ThemedButton name="basic" type="primary" onPress={onFavouritesPress}>
          Favourites
        </ThemedButton>
      </LinearGradient>
    </View>
  );
};

export default memo(Home);
