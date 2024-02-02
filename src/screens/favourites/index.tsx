import React, {FC, memo, useState, useRef, useEffect, useCallback} from 'react';
import {View, FlatList} from 'react-native';
import {useTheme} from '../../context/Theme';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {TMovieItem} from '../search/types';
import {useIsFocused} from '@react-navigation/native';
import {store} from '../../../src/reduxStore';
import {defaultRenderFooter} from '../../components/Footer';
import {FavouritesProps} from './types';
import {defaultRenderMovieItem} from '../../components/MovieItem';

const PER_PAGE = 10;
let favourites: TMovieItem[];
let oldFavourites: TMovieItem[];

const Favourites: FC<FavouritesProps> = ({
  renderMovieItem = defaultRenderMovieItem,
  renderFooter = defaultRenderFooter,
}) => {
  const isFocused = useIsFocused();
  const {theme} = useTheme();
  const [displayedFavourites, setDisplayedFavourites] = useState<TMovieItem[]>(
    [],
  );
  const numberOfTotalElements = useRef<number>(0);
  const pageNumber = useRef<number>(0);
  const isLoading = useRef<boolean>(false);
  const flatListRef = useRef<FlatList>(null);

  const loadFavourites = useCallback((): void => {
    isLoading.current = true;
    const moviesToDisplay = favourites.slice(
      pageNumber.current * PER_PAGE,
      pageNumber.current * PER_PAGE + PER_PAGE,
    );
    if (pageNumber.current === 0) {
      setDisplayedFavourites([...moviesToDisplay]);
    } else {
      setDisplayedFavourites([...displayedFavourites, ...moviesToDisplay]);
    }
    isLoading.current = false;
  }, [displayedFavourites]);

  useEffect(() => {
    if (isFocused) {
      favourites = store.getState().movieSlice.favourites;
      numberOfTotalElements.current = favourites.length;
      if ((oldFavourites?.length || 0) !== favourites?.length) {
        flatListRef.current?.scrollToOffset({animated: true, offset: 0});
        pageNumber.current = 0;
        loadFavourites();
      }
    } else {
      oldFavourites = favourites;
    }
  }, [isFocused]);

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={[theme.cornflowerBlue, theme.frenchPass]}
        style={styles.gradient}>
        <FlatList
          ref={flatListRef}
          data={displayedFavourites}
          renderItem={({item, index}) => renderMovieItem({item, index})}
          onEndReachedThreshold={0.7}
          onEndReached={() => {
            if (
              displayedFavourites?.length &&
              displayedFavourites?.length < numberOfTotalElements.current
            ) {
              pageNumber.current += 1;
              loadFavourites();
            }
          }}
          ListFooterComponent={() =>
            renderFooter({
              isLoading: isLoading.current,
              pageNumber: pageNumber.current + 1,
            })
          }
          keyExtractor={(item: TMovieItem) => item.imdbID}
        />
      </LinearGradient>
    </View>
  );
};

export default memo(Favourites);
