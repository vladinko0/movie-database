import React, {FC, memo, useEffect, useState, useRef, useCallback} from 'react';
import {View, ScrollView, Alert, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '../../context/Theme';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {DetailProps, TDetail} from './types';
import {MovieDetailResponse} from '../../reduxStore/slices/types';
import {
  requestMovieDetails,
  setFavouriteMovie,
  useAppSelector,
  useAppDispatch,
} from '../../reduxStore';
import FastImage, {Source} from 'react-native-fast-image';
import Loader from '../../components/Loader';
import {fullStar, emptyStar} from '../../assets';

const Detail: FC<DetailProps> = ({route}) => {
  const movie = route.params.movie;
  const {theme} = useTheme();
  const dispatch = useAppDispatch();
  const [detail, setDetail] = useState<TDetail>({
    title: '',
    poster: '',
    year: '',
    genre: '',
    plot: '',
  });
  const [starSource, setStarSource] = useState<Source>(emptyStar);
  const isLoading = useRef<boolean>(true);
  const favourites = useAppSelector(state => state?.movieSlice.favourites);

  const getDetails = useCallback((): void => {
    const requestBody = {
      i: movie.imdbID,
    };
    dispatch(
      requestMovieDetails(
        requestBody,
        (response: MovieDetailResponse) => {
          isLoading.current = false;
          setDetail({
            title: response.data?.Title,
            poster: response.data?.Poster,
            year: response.data?.Year,
            genre: response.data?.Genre,
            plot: response.data?.Plot,
          });
        },
        error => {
          console.warn('Movie detail Error: ', error);
          Alert.alert(error);
        },
      ),
    );
  }, [dispatch, movie.imdbID]);

  const checkFavourites = useCallback((): void => {
    if (favourites.length && favourites.some(e => e.imdbID === movie.imdbID)) {
      setStarSource(fullStar);
    }
  }, [favourites, movie.imdbID]);

  useEffect(() => {
    getDetails();
    checkFavourites();
  }, [getDetails, checkFavourites]);

  const onStarPress = useCallback((): void => {
    if (starSource === emptyStar) {
      setStarSource(fullStar);
      if (
        !favourites.length ||
        !favourites.some(e => e.imdbID === movie.imdbID)
      ) {
        dispatch(setFavouriteMovie([...favourites, movie]));
      }
    } else {
      const newFavourites = favourites.filter(
        item => item.imdbID !== movie.imdbID,
      );
      dispatch(setFavouriteMovie(newFavourites));
      setStarSource(emptyStar);
    }
  }, [starSource, favourites, dispatch, movie]);

  return (
    <ScrollView style={styles.mainContainer}>
      <LinearGradient
        colors={[theme.cornflowerBlue, theme.frenchPass]}
        style={styles.gradient}>
        {isLoading.current ? (
          <Loader />
        ) : (
          <>
            <FastImage
              style={styles.image}
              source={{
                uri: detail.poster,
              }}
            />
            <View style={styles.textsView}>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>{detail.title}</Text>
                <TouchableOpacity onPress={onStarPress}>
                  <FastImage style={styles.star} source={starSource} />
                </TouchableOpacity>
              </View>
              <Text style={styles.genreText}>
                {detail.year} / {detail.genre}
              </Text>
              <Text style={styles.genreText}>Plot:</Text>
              <Text style={styles.genreText}>{detail.plot}</Text>
            </View>
          </>
        )}
      </LinearGradient>
    </ScrollView>
  );
};

export default memo(Detail);
