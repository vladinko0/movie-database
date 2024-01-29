import React, {FC, memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '../../context/Theme';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {StackNavigation} from '../../navigation/types';
import {SCREENS} from '../../navigation/constants';

const Home: FC = () => {
  const {theme} = useTheme();
  const navigation = useNavigation<StackNavigation>();

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={[theme.homeGradient1, theme.homeGradient2]}
        style={styles.gradient}>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => navigation.navigate(SCREENS.SEARCH)}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.favouritesButton}
          onPress={() => navigation.navigate(SCREENS.FAVOURITES)}>
          <Text style={styles.buttonText}>Favourites</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default memo(Home);
