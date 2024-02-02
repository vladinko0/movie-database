import {
  DetailRequestBody,
  MovieDetailData,
  DetailFailureCallback,
  SearchRequestBody,
  SearchData,
  SearchFailureCallback,
} from '../../slices/types';

export type MovieDetailSaga = {
  requestBody: DetailRequestBody;
  successCallback: (data: MovieDetailData) => void;
  failureCallback: DetailFailureCallback;
};

export type SearchMoviesSaga = {
  requestBody: SearchRequestBody;
  successCallback: (data: SearchData) => void;
  failureCallback: SearchFailureCallback;
};
