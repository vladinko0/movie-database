import {all, fork} from 'redux-saga/effects';
import movieSaga from './Movie';

const rootSaga = function* rootSaga() {
  yield all([fork(movieSaga)]);
};
export default rootSaga;
