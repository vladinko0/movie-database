import {createSlice} from '@reduxjs/toolkit';
import {
  MovieSliceProps,
  FavouriteMovieAction,
  FavouriteMovieState,
  SearchRequestBody,
  DetailRequestBody,
  DetailSuccessCallback,
  DetailFailureCallback,
  SearchSuccessCallback,
  SearchFailureCallback,
} from './types';

const initialState: MovieSliceProps = {
  favourites: [],
};

export const movieSlice = createSlice({
  name: 'Movie',
  initialState,
  reducers: {
    requestSearchMoviesList: {
      reducer: state => state,
      prepare: (
        requestBody: SearchRequestBody,
        successCallback: SearchSuccessCallback,
        failureCallback: SearchFailureCallback,
      ) => ({
        payload: {
          requestBody,
          successCallback,
          failureCallback,
        },
      }),
    },
    requestMovieDetails: {
      reducer: state => state,
      prepare: (
        requestBody: DetailRequestBody,
        successCallback: DetailSuccessCallback,
        failureCallback: DetailFailureCallback,
      ) => ({
        payload: {
          requestBody,
          successCallback,
          failureCallback,
        },
      }),
    },
    setFavouriteMovie: (
      state: FavouriteMovieState,
      action: FavouriteMovieAction,
    ) => {
      state.favourites = action.payload;
    },
  },
});

const {reducer} = movieSlice;
export const {requestSearchMoviesList, requestMovieDetails, setFavouriteMovie} =
  movieSlice.actions;
export default reducer;
