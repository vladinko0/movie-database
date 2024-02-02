import React, {FC, memo, useState, useRef} from 'react';
import {View, Alert, FlatList} from 'react-native';
import {useTheme} from '../../context/Theme';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {requestSearchMoviesList} from '../../reduxStore';
import {useDispatch} from 'react-redux';
import {TMovieItem} from './types';
import {Fumi} from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {SearchMovieResponse} from '../../reduxStore/slices/types';
import {SearchProps} from './types';
import {defaultRenderFooter} from '../../components/Footer';
import {defaultRenderMovieItem} from '../../components/MovieItem';

const Search: FC<SearchProps> = ({
  renderMovieItem = defaultRenderMovieItem,
  renderFooter = defaultRenderFooter,
}) => {
  const {theme} = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState<TMovieItem[]>([]);
  const numberOfTotalElements = useRef<number>(0);
  const isLoading = useRef<boolean>(false);
  const pageNumber = useRef<number>(1);
  const flatListRef = useRef<FlatList>(null);

  const onChangeText = (newValue?: string): void => {
    isLoading.current = true;
    if (newValue && pageNumber.current > 1) {
      flatListRef.current?.scrollToOffset({animated: true, offset: 0});
    }
    if (newValue === '' || !!newValue) {
      setValue(newValue);
      pageNumber.current = 1;
    }

    const requestBody = {
      searchString: newValue || value,
      page: pageNumber.current,
    };
    dispatch(
      requestSearchMoviesList(
        requestBody,
        (response: SearchMovieResponse) => {
          numberOfTotalElements.current = Number(response.data?.totalResults);
          isLoading.current = false;
          if (!response.data?.Search) {
            setMovies([]);
          } else if (pageNumber.current === 1) {
            setMovies([...response.data.Search]);
          } else {
            setMovies([...movies, ...response.data.Search]);
          }
        },
        error => {
          console.warn('Movie search Error: ', error);
          Alert.alert(error);
        },
      ),
    );
  };

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={[theme.cornflowerBlue, theme.frenchPass]}
        style={styles.gradient}>
        <Fumi
          label={'Type here to find movies!'}
          iconClass={FontAwesomeIcon}
          iconName={'file-movie-o'}
          iconColor={theme.cornflowerBlue}
          iconSize={20}
          inputPadding={16}
          style={styles.fumi}
          onChangeText={onChangeText}
        />
        <FlatList
          ref={flatListRef}
          data={movies}
          renderItem={({item, index}) => renderMovieItem({item, index})}
          onEndReachedThreshold={0.7}
          onEndReached={() => {
            if (
              movies?.length &&
              movies?.length < numberOfTotalElements.current
            ) {
              pageNumber.current += 1;
              onChangeText();
            }
          }}
          ListFooterComponent={() =>
            renderFooter({
              isLoading: isLoading.current,
              pageNumber: pageNumber.current,
            })
          }
          keyExtractor={(item: TMovieItem) => item.imdbID}
        />
      </LinearGradient>
    </View>
  );
};

export default memo(Search);
