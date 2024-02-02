import {all, fork} from 'redux-saga/effects';
import getSearchMoviesSaga from './searchMoviesSaga';
import getMovieDetailSaga from './movieDetailSaga';

const scanSaga = function* root() {
  yield all([fork(getSearchMoviesSaga), fork(getMovieDetailSaga)]);
};
export default scanSaga;
