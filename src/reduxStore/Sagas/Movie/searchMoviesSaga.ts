import {PayloadAction} from '@reduxjs/toolkit';
import {call, takeLatest, StrictEffect} from 'redux-saga/effects';
import {requestSearchMoviesList} from '../../slices/movieSlice';
import {searchMovies} from '../../../services/modules/Movie';
import {SearchMoviesSaga} from './types';
import {SearchData} from '../../slices/types';

function* getSearchMoviesSaga(
  action: PayloadAction<SearchMoviesSaga>,
): Generator<StrictEffect, void, SearchData> {
  try {
    const data = yield call(searchMovies, action?.payload?.requestBody);
    action.payload?.successCallback(data);
  } catch (error: any) {
    action.payload?.failureCallback(error.message);
  }
}

const root = function* root() {
  yield takeLatest(requestSearchMoviesList.type, getSearchMoviesSaga);
};

export default root;
