import {PayloadAction} from '@reduxjs/toolkit';
import {call, takeLatest, StrictEffect} from 'redux-saga/effects';
import {requestMovieDetails} from '../../slices/movieSlice';
import {movieDetail} from '../../../services/modules/Movie';
import {MovieDetailSaga} from './types';
import {MovieDetailData} from '../../slices/types';

function* getMovieDetailSaga(
  action: PayloadAction<MovieDetailSaga>,
): Generator<StrictEffect, void, MovieDetailData> {
  try {
    const data = yield call(movieDetail, action?.payload?.requestBody);
    action.payload?.successCallback(data);
  } catch (error: any) {
    action.payload?.failureCallback(error.message);
  }
}

const root = function* root() {
  yield takeLatest(requestMovieDetails.type, getMovieDetailSaga);
};

export default root;
