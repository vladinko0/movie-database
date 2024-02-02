import React, {FC, memo, useCallback} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import {RenderMovieItem} from '../../screens/search/types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../navigation/types';
import {SCREENS} from '../../navigation/constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '../../context/Theme';
import FastImage from 'react-native-fast-image';

const MovieItem: FC<RenderMovieItem> = ({item, index}) => {
  const navigation = useNavigation<StackNavigation>();
  const {theme} = useTheme();
  const style = styles(theme);

  const onItemPress = useCallback(
    () => navigation.navigate(SCREENS.DETAIL, {movie: item}),
    [navigation, item],
  );

  return (
    <TouchableOpacity style={style.container} onPress={onItemPress}>
      <FastImage style={style.poster} source={{uri: item.Poster}} key={index} />
      <Text style={style.titleText}>{item.Title}</Text>
      <FontAwesome name="angle-right" size={30} color={theme.shineGray} />
    </TouchableOpacity>
  );
};

export default memo(MovieItem);
export const defaultRenderMovieItem = (props: RenderMovieItem) => (
  <MovieItem {...props} />
);
